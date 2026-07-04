import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild,
  inject,
} from '@angular/core';

interface Node {
  x: number;
  y: number;
  z: number;
  label: string;
}

const TECH = [
  'Java', 'Spring', 'Angular', 'TypeScript', 'AWS', 'Docker',
  'SQL', 'REST', 'Redis', 'Microservices', 'JPA', 'Git',
];

/**
 * Interconnected "technology globe": points distributed on a sphere via the
 * Fibonacci lattice, projected to 2D each frame, rotated continuously and
 * tilted by the pointer. Connecting lines glow between nearby nodes.
 *
 * Performance: single canvas, one rAF loop OUTSIDE Angular, DPR-aware, paused
 * when offscreen or when the user prefers reduced motion. Fully cleaned up on
 * destroy - no leaked listeners or animation frames.
 */
@Component({
  selector: 'app-tech-globe',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<canvas #canvas class="globe" aria-hidden="true"></canvas>`,
  styles: [
    `
      :host {
        position: absolute;
        inset: 0;
        display: block;
        pointer-events: none;
      }
      .globe {
        width: 100%;
        height: 100%;
        display: block;
      }
    `,
  ],
})
export class TechGlobeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true })
  private canvasRef!: ElementRef<HTMLCanvasElement>;
  private readonly zone = inject(NgZone);
  private ctx!: CanvasRenderingContext2D;
  private nodes: Node[] = [];
  private frameId = 0;
  private width = 0;
  private height = 0;
  private radius = 0;
  private angleY = 0;
  private angleX = -0.2;
  private targetTiltX = -0.2;
  private targetTiltY = 0;
  private dpr = 1;
  private observer?: IntersectionObserver;
  private visible = true;
  private reducedMotion = false;

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }
    this.ctx = ctx;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.nodes = this.buildNodes(TECH.length);

    this.zone.runOutsideAngular(() => {
      this.resize();
      window.addEventListener('resize', this.resize, { passive: true });
      window.addEventListener('pointermove', this.onPointerMove, { passive: true });

      this.observer = new IntersectionObserver(
        ([entry]) => {
          this.visible = entry.isIntersecting;
          if (this.visible && !this.frameId) {
            this.loop();
          }
        },
        { threshold: 0 }
      );
      this.observer.observe(canvas);

      this.loop();
    });
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.frameId);
    this.frameId = 0;
    this.observer?.disconnect();
    window.removeEventListener('resize', this.resize);
    window.removeEventListener('pointermove', this.onPointerMove);
  }

  /** Even distribution on a unit sphere (Fibonacci lattice). */
  private buildNodes(count: number): Node[] {
    const nodes: Node[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      nodes.push({
        x: Math.cos(theta) * r,
        y,
        z: Math.sin(theta) * r,
        label: TECH[i],
      });
    }
    return nodes;
  }

  private readonly resize = (): void => {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
    canvas.width = Math.round(this.width * this.dpr);
    canvas.height = Math.round(this.height * this.dpr);
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.radius = Math.min(this.width, this.height) * 0.36;
  };

  private readonly onPointerMove = (event: PointerEvent): void => {
    const nx = (event.clientX / window.innerWidth) * 2 - 1;
    const ny = (event.clientY / window.innerHeight) * 2 - 1;
    this.targetTiltY = nx * 0.6;
    this.targetTiltX = -0.2 + ny * 0.4;
  };

  private loop = (): void => {
    if (!this.visible) {
      this.frameId = 0;
      return;
    }
    this.render();
    this.frameId = requestAnimationFrame(this.loop);
  };

  private render(): void {
    const { ctx, width, height, radius } = this;
    ctx.clearRect(0, 0, width, height);

    if (!this.reducedMotion) {
      this.angleY += 0.0035;
    }

    // ease pointer tilt
    this.angleX += (this.targetTiltX - this.angleX) * 0.05;
    const tiltY = this.targetTiltY;

    const cx = width / 2;
    const cy = height / 2;

    const cosY = Math.cos(this.angleY + tiltY);
    const sinY = Math.sin(this.angleY + tiltY);
    const cosX = Math.cos(this.angleX);
    const sinX = Math.sin(this.angleX);

    const projected = this.nodes.map((n) => {
      // rotate around Y then X
      let x = n.x * cosY - n.z * sinY;
      let z = n.x * sinY + n.z * cosY;
      let y = n.y * cosX - z * sinX;
      z = n.y * sinX + z * cosX;

      const perspective = 1 / (1.8 - z); // depth scaling
      return {
        sx: cx + x * radius,
        sy: cy + y * radius,
        depth: z,
        scale: perspective,
        label: n.label,
      };
    });

    // connecting lines between nearby nodes
    for (let i = 0; i < projected.length; i++) {
      for (let j = i + 1; j < projected.length; j++) {
        const a = projected[i];
        const b = projected[j];
        const dist = Math.hypot(a.sx - b.sx, a.sy - b.sy);
        if (dist < radius * 0.95) {
          const alpha = (1 - dist / (radius * 0.95)) * 0.28 * ((a.depth + b.depth) / 2 + 1);
          ctx.strokeStyle = `rgba(99, 130, 246, ${Math.max(alpha, 0)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.sx, a.sy);
          ctx.lineTo(b.sx, b.sy);
          ctx.stroke();
        }
      }
    }

    // nodes + labels, back-to-front
    projected
      .sort((a, b) => a.depth - b.depth)
      .forEach((p) => {
        const opacity = 0.35 + (p.depth + 1) * 0.32;
        const r = 3 + p.scale * 2.5;

        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
        const glow = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, r * 3);
        glow.addColorStop(0, `rgba(34, 211, 238, ${opacity})`);
        glow.addColorStop(1, 'rgba(34, 211, 238, 0)');
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(233, 236, 245, ${opacity})`;
        ctx.fill();

        ctx.font = `${11 + p.scale * 4}px Inter, sans-serif`;
        ctx.fillStyle = `rgba(154, 166, 192, ${opacity})`;
        ctx.textAlign = 'center';
        ctx.fillText(p.label, p.sx, p.sy - r - 6);
      });
  }
}
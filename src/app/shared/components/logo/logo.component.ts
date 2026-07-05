import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="logo" [class.logo--full]="variant === 'full'">
      <svg
        class="logo__mark"
        [attr.width]="size"
        [attr.height]="size"
        viewBox="0 0 48 48"
        role="img"
        [attr.aria-label]="variant === 'mark' ? 'Rahul Raj logo' : null"
        [attr.aria-hidden]="variant === 'full' ? true : null"
      >
        <defs>
          <linearGradient id="rrGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#22d3ee" />
            <stop offset="0.5" stop-color="#6366f1" />
            <stop offset="1" stop-color="#a855f7" />
          </linearGradient>
        </defs>

        <!-- hexagonal tech ring -->
        <path
          d="M24 3 41.1 13v22L24 45 6.9 35V13z"
          fill="none"
          stroke="url(#rrGrad)"
          stroke-width="2.2"
          stroke-linejoin="round"
        />

        <!-- circuit nodes -->
        <circle cx="24" cy="3" r="2" fill="#22d3ee" />
        <circle cx="41.1" cy="35" r="1.6" fill="#a855f7" />

        <!-- RR monogram -->
        <text
          x="50%"
          y="54%"
          text-anchor="middle"
          dominant-baseline="middle"
          font-family="Sora, sans-serif"
          font-weight="800"
          font-size="18"
          fill="url(#rrGrad)"
        >
          RR
        </text>
      </svg>

      @if (variant === 'full') {
        <span class="logo__word">
          Rahul Raj
        </span>
      }
    </span>
  `,
  styles: [`
    .logo {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
    }

    .logo__mark {
      display: block;
      filter: drop-shadow(0 4px 14px rgba(99, 102, 241, 0.35));
      transition: transform var(--dur) var(--ease-out);
    }

    .logo:hover .logo__mark {
      transform: rotate(8deg) scale(1.05);
    }

    .logo__word {
      font-family: var(--font-display);
      font-weight: 800;
      font-size: 1.15rem;
      letter-spacing: -0.02em;
      background: var(--gradient-neon);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  `],
})
export class LogoComponent {
  @Input() variant: 'full' | 'mark' = 'full';
  @Input() size = 40;
}
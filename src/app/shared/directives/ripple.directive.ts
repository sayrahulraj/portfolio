import { DOCUMENT } from "@angular/common";
import { Directive, ElementRef, HostListener, inject } from "@angular/core";

/**
 * Adds a Material-style ripple that spreads out from the click point.
 * The ripple element removes itself once its CSS animation finishes.
 */
@Directive({
    selector: '[appRipple]',
    standalone: true,
})
export class RippleDirective {
    private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly document = inject(DOCUMENT);

    @HostListener('click', ['$event'])
    onClick(event: MouseEvent): void {
        const el = this.host.nativeElement;
        const rect = el.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        const ripple = this.document.createElement('span');
        ripple.className = 'ripple-wave';
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

        el.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
    }
}
import { Directive, ElementRef, HostListener, inject } from "@angular/core";

@Directive({
    selector: '[appRipple]',
    standalone: true,
})
export class RippleDirective {
    private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

    @HostListener('click', ['$event'])
    onClick(event: MouseEvent): void {
        // Ripple effect logic here
        const el = this.host.nativeElement;
        const rect = el.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        const ripple = document.createElement('span');
        ripple.className = 'ripple-wave';
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

        el.appendChild(ripple);
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    }
}
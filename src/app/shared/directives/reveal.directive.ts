import { Directive, ElementRef, inject, Input } from "@angular/core";

@Directive({
    selector: '[appReveal]',
    standalone: true,
})
export class RevealDirective {
    private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
    private observer?: IntersectionObserver;

    @Input() revealDelay = 0;

    ngAfterViewInit(): void {
        const el = this.host.nativeElement;
        if (this.revealDelay) {
            el.style.transitionDelay = `${this.revealDelay}ms`;
        }

        if (typeof IntersectionObserver === 'undefined') {
            el.classList.add('is--visible');
            return;
        }

        this.observer = new IntersectionObserver((entries, obs) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    el.classList.add('is--visible');
                    obs.unobserve(el);
                }
            }
        },
        {threshold: 0.15},
    );
    this.observer.observe(el);
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
    }
}
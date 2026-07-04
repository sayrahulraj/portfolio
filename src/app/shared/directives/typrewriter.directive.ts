import { Directive, ElementRef, inject, Input, NgZone } from "@angular/core";

@Directive({
    selector: '[appTypewriter]',
    standalone: true,
})

export class TypewriterDirective {
    // Directive logic goes here
    private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly zone = inject(NgZone);

    @Input('appTypewriter') words: readonly string[] = [];
    @Input() typeSpeed = 90;
    @Input() deleteSpeed = 45;
    @Input() pause = 1400;

    private timer?: ReturnType<typeof setTimeout>;
    private wordIndex = 0;
    private charIndex = 0;
    private deleting = false;
    private destroyed = false;

    ngAfterViewInit(): void {
        if (!this.words.length) {
            return;
        }
        this.zone.runOutsideAngular(() => this.tick());
    }

    ngOnDestroy(): void {
        this.destroyed = true;
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }

    private tick(): void {
        if (this.destroyed) {
            return;
        }

        const word = this.words[this.wordIndex];
        this.charIndex += this.deleting ? -1 : 1;
        this.host.nativeElement.textContent = word.slice(0, this.charIndex);

        let delay = this.deleting ? this.deleteSpeed : this.typeSpeed;

        if (!this.deleting && this.charIndex == word.length) {
            delay = this.pause;
            this.deleting = true;
        } else if (this.deleting && this.charIndex === 0) {
            this.deleting = false;
            this.wordIndex = (this.wordIndex + 1) % this.words.length
            delay = 300;
        }
        this.timer = setTimeout(() => this.tick(), delay);
    }
}
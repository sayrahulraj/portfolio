import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
  <header class="heading reveal" appReveal>
    <span class="eyebrow"> {{eyebrow}} </span>
    <h2 class="section-title" [id]="titleId"> 
      {{ title }} <span class="text-gradient"> {{ accent }} </span> </h2>
    @if (subtitle) {
      <p class="heading__sub"> {{ subtitle }} </p>
    }
</header>`,
  styles: [`
  .heading {
    text-align: center;
    max-width: 640px;
    margin: 0 auto clamp(2rem, 5vw, 3.5rem);
    }
    .heading__sub {
      color: var(--text-muted);
      margin-top: 0.75rem;
      font-size: 1.05rem;
    }`,
  ],
})
export class SectionHeadingComponent {
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() accent = '';
  @Input() subtitle = '';
  @Input() titleId?: string;
}

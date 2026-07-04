import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ABOUT_HIGHLIGHTS,
  ABOUT_TIMELINE,
  PROFILE,
} from '../../core/data/portfolio.data';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeadingComponent, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  protected readonly profile = PROFILE;
  protected readonly timeline = ABOUT_TIMELINE;
  protected readonly highlights = ABOUT_HIGHLIGHTS;
}
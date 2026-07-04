import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CERTIFICATIONS } from '../../core/data/portfolio.data';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-certifications',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, SectionHeadingComponent, RevealDirective],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class CertificationsComponent {
  protected readonly certifications = CERTIFICATIONS;
}
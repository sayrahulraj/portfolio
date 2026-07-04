import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PROFILE, SOCIALS } from '../../core/data/portfolio.data';
import { ScrollService } from '../../core/services/scroll.service';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { TypewriterDirective } from '../../shared/directives/typrewriter.directive';
import { ResumeButtonComponent } from '../../shared/components/resume-button/resume-button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IconComponent,
    TypewriterDirective,
    ResumeButtonComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  private readonly scroll = inject(ScrollService);

  protected readonly profile = PROFILE;
  protected readonly socials = SOCIALS;
  protected readonly roles = PROFILE.roles;

  scrollTo(id: string): void {
    this.scroll.scrollTo(id);
  }
}
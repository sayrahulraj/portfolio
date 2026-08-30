import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';
import { NAV_ITEMS, PROFILE, SOCIALS } from '../../core/data/portfolio.data';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LogoComponent, IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  protected readonly scroll = inject(ScrollService);
  protected readonly profile = PROFILE;
  protected readonly socials = SOCIALS;
  protected readonly quickLinks = NAV_ITEMS;
  // Keep the copyright year current without needing a yearly content update.
  protected readonly year = new Date().getFullYear();

  onLink(id: string): void {
    this.scroll.scrollTo(id);
  }
}
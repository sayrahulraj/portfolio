import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';
import { NAV_ITEMS } from '../../core/data/portfolio.data';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { ThemeToggleComponent } from '../../shared/components/theme-toggle/theme-toggle.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LogoComponent, ThemeToggleComponent, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  protected readonly scroll = inject(ScrollService);
  protected readonly navItems = NAV_ITEMS;
  
  protected readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((prev) => !prev);
  }

  onNavClick(id: string): void {
    this.menuOpen.set(false);
    this.scroll.scrollTo(id);
  }
}
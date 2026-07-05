import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  template: `
    <button
      type="button"
      class="theme-toggle"
      role="switch"
      [attr.aria-checked]="isDark()"
      [attr.aria-label]="'Switch to ' + (isDark() ? 'dark' : 'light') + ' theme'"
      (click)="theme.toggle()"
    >
      <span class="theme-toggle__track">
        <span
          class="theme-toggle__thumb"
          [class.theme-toggle__thumb--light]="!isDark()"
        >
          <app-icon
            [name]="isDark() ? 'moon' : 'sun'"
            [size]="14"
          />
        </span>
      </span>
    </button>
  `,
  styles: [`
    .theme-toggle {
      border: 1px solid var(--border-strong);
      background: var(--surface);
      border-radius: var(--radius-pill);
      padding: 3px;
      display: inline-flex;
      transition: background var(--dur) var(--ease-out);
    }

    .theme-toggle:hover {
      background: var(--surface-strong);
    }

    .theme-toggle__track {
      position: relative;
      width: 52px;
      height: 26px;
      display: block;
    }

    .theme-toggle__thumb {
      position: absolute;
      top: 0;
      left: 0;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      color: #fff;
      background: var(--gradient-brand);
      transition:
        transform var(--dur) var(--ease-out),
        background var(--dur) var(--ease-out);
    }

    .theme-toggle__thumb--light {
      transform: translateX(26px);
      background: linear-gradient(135deg, #f59e0b, #f97316);
    }
  `],
})
export class ThemeToggleComponent {
  protected readonly theme = inject(ThemeService);
  protected readonly isDark = computed(() => this.theme.theme() === 'light');
}
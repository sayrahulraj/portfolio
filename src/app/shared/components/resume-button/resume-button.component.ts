import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ResumeService } from '../../../core/services/resume.service';
import { RippleDirective } from '../../directives/ripple.directive';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-resume-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RippleDirective, IconComponent],
  template: `
    <div class="resume">
      <button
        type="button"
        class="btn btn--primary resume__btn"
        appRipple
        [attr.aria-busy]="resume.state() === 'downloading'"
        (click)="resume.download()"
      >
        <app-icon class="btn__icon" name="download" [size]="18" />
        <span>
          {{ resume.state() === 'downloading' ? 'Preparing…' : 'Download Resume' }}
        </span>
        <span class="resume__tooltip" role="tooltip">
          Download my resume
        </span>
      </button>

      @if (resume.state() === 'unavailable') {
        <p class="resume__msg" role="alert">
          <app-icon name="close" [size]="16" />
          {{ resume.unavailableMessage }}
        </p>
      }
    </div>
  `,
  styles: [`
    .resume {
      display: inline-flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .resume__btn {
      position: relative;
    }

    .resume__tooltip {
      position: absolute;
      bottom: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%) translateY(6px);
      background: var(--bg-elev);
      color: var(--text);
      border: 1px solid var(--border-strong);
      padding: 0.4rem 0.75rem;
      border-radius: var(--radius-sm);
      font-size: 0.8rem;
      font-weight: 500;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      box-shadow: var(--shadow-1);
      transition:
        opacity var(--dur) var(--ease-out),
        transform var(--dur) var(--ease-out);
    }

    .resume__btn:hover .resume__tooltip,
    .resume__btn:focus-visible .resume__tooltip {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }

    .resume__msg {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      margin: 0;
      font-size: 0.85rem;
      color: #f87171;
    }
  `],
})
export class ResumeButtonComponent {
  protected readonly resume = inject(ResumeService);
}
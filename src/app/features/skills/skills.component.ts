import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SKILL_CATEGORIES } from '../../core/data/portfolio.data';
import { IconComponent, IconName, isIconName } from '../../shared/components/icon/icon.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeadingComponent, RevealDirective, IconComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  protected readonly categories = SKILL_CATEGORIES;

  // Category icons come from the data file as plain strings, so guard against
  // a typo silently rendering a blank icon by falling back to something generic.
  iconFor(name: string): IconName {
    return isIconName(name) ? name : 'code';
  }
}
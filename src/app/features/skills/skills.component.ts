import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SKILL_CATEGORIES } from '../../core/data/portfolio.data';
import { IconName } from '../../shared/components/icon/icon.component';
import { IconComponent } from '../../shared/components/icon/icon.component';
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

  iconFor(name: string): IconName {
    return name as IconName;
  }
}
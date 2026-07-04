import { AfterViewInit, ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { ExperienceComponent } from "../experience/experience.component";
import { ProjectsComponent } from "../projects/projects.component";
import { CertificationsComponent } from "../certifications/certifications.component";
import { ContactComponent } from "../contact/contact.component";
import { ScrollService } from '../../core/services/scroll.service';
import { SeoService } from '../../core/services/seo.service';
import { NAV_ITEMS, PROFILE } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeroComponent, AboutComponent, SkillsComponent, ExperienceComponent, ProjectsComponent, CertificationsComponent, ContactComponent],
  template: `
  <app-hero />
  <app-about />
  <app-skills />
  <app-experience />
  <app-projects />
  <app-certifications />
  <app-contact />
  `,
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly scroll = inject(ScrollService);
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.apply({
      title: `${PROFILE.fullName} - ${PROFILE.title}`,
      description: PROFILE.summary,
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.scroll.observeSections(NAV_ITEMS.map((item) => item.id)));
  }

  ngOnDestroy(): void {
    this.scroll.disconnect;
  }
}

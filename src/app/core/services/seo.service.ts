import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

/** Centralises document title + meta tag updates for SEO/social sharing. */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  apply(config: {
    title: string;
    description: string;
    image?: string;
  }): void {
    this.title.setTitle(config.title);

    this.meta.updateTag({
      name: 'description',
      content: config.description,
    });

    this.meta.updateTag({
      property: 'og:title',
      content: config.title,
    });

    this.meta.updateTag({
      property: 'og:description',
      content: config.description,
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: config.title,
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: config.description,
    });

    if (config.image) {
      this.meta.updateTag({
        property: 'og:image',
        content: config.image,
      });

      this.meta.updateTag({
        name: 'twitter:image',
        content: config.image,
      });
    }
  }
}
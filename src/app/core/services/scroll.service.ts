import { DOCUMENT } from '@angular/common';
import { Injectable, NgZone, inject, signal } from '@angular/core';

/**
 * Smooth-scrolls to section anchors and tracks which section is in view
 * (scroll-spy) so the navbar can highlight the active link.
 */
@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly document = inject(DOCUMENT);
  private readonly zone = inject(NgZone);
  private readonly window = this.document.defaultView;

  readonly activeSection = signal<string>('home');
  readonly scrolled = signal<boolean>(false);

  private observer?: IntersectionObserver;

  /** Smoothly scroll to a section by id, accounting for the sticky navbar. */
  scrollTo(id: string): void {
    const el = this.document.getElementById(id);
    if (!el) {
      return;
    }

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  scrollToTop(): void {
    this.window?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  /** Begin observing section elements to drive scroll-spy + navbar elevation. */
  observeSections(ids: readonly string[]): void {
    if (!this.window || typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.disconnect();

    // Run outside Angular; only write to signals (which trigger CD) on change.
    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.zone.run(() =>
                this.activeSection.set(entry.target.id)
              );
            }
          }
        },
        {
          rootMargin: '-45% 0px -50% 0px',
          threshold: 0,
        }
      );

      for (const id of ids) {
        const el = this.document.getElementById(id);
        if (el) {
          this.observer!.observe(el);
        }
      }

      this.window!.addEventListener('scroll', this.onScroll, {
        passive: true,
      });

      this.onScroll();
    });
  }

  disconnect(): void {
    this.observer?.disconnect();
    this.window?.removeEventListener('scroll', this.onScroll);
  }

  private readonly onScroll = (): void => {
    const isScrolled = (this.window?.scrollY ?? 0) > 4;

    if (isScrolled !== this.scrolled()) {
      this.zone.run(() => this.scrolled.set(isScrolled));
    }
  };
}
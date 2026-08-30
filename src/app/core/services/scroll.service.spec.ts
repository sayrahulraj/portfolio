import { TestBed } from '@angular/core/testing';
import { ScrollService } from './scroll.service';

describe('ScrollService', () => {
  let service: ScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollService);
  });

  afterEach(() => {
    service.disconnect();
    document.querySelectorAll('[data-test-section]').forEach((el) => el.remove());
  });

  it('scrolls a section into view when the id exists on the page', () => {
    const section = document.createElement('div');
    section.id = 'about';
    section.setAttribute('data-test-section', '');
    document.body.appendChild(section);
    spyOn(section, 'scrollIntoView');

    service.scrollTo('about');

    expect(section.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
  });

  it('does nothing when asked to scroll to an id that is not on the page', () => {
    expect(() => service.scrollTo('does-not-exist')).not.toThrow();
  });

  it('scrolls the window back to the top', () => {
    const scrollToSpy = spyOn(window, 'scrollTo');
    service.scrollToTop();
    expect(scrollToSpy.calls.argsFor(0)[0] as unknown).toEqual({ top: 0, behavior: 'smooth' });
  });

  it('marks a section as active when the intersection observer reports it in view', () => {
    // Real IntersectionObserver timing/geometry in a headless browser is too
    // flaky to assert on directly, so swap in a fake observer and drive its
    // callback ourselves to check the wiring between it and activeSection.
    let reportIntersection!: IntersectionObserverCallback;
    const originalIntersectionObserver = window.IntersectionObserver;

    class FakeIntersectionObserver {
      constructor(callback: IntersectionObserverCallback) {
        reportIntersection = callback;
      }
      // These are no-ops — the test drives reportIntersection() directly instead.
      observe(): void {
        return;
      }
      unobserve(): void {
        return;
      }
      disconnect(): void {
        return;
      }
    }
    (window as unknown as { IntersectionObserver: unknown }).IntersectionObserver = FakeIntersectionObserver;

    const section = document.createElement('div');
    section.id = 'skills';
    section.setAttribute('data-test-section', '');
    document.body.appendChild(section);

    try {
      service.observeSections(['skills']);
      const fakeEntry = { isIntersecting: true, target: section } as unknown as IntersectionObserverEntry;
      reportIntersection([fakeEntry], {} as IntersectionObserver);

      expect(service.activeSection()).toBe('skills');
    } finally {
      (window as unknown as { IntersectionObserver: unknown }).IntersectionObserver = originalIntersectionObserver;
    }
  });

  it('disconnect() can be called safely even before observeSections() has run', () => {
    expect(() => service.disconnect()).not.toThrow();
  });
});

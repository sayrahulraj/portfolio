import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  beforeEach(() => {
    localStorage.removeItem('portfolio-theme');
  });

  function create(): ThemeService {
    TestBed.configureTestingModule({});
    const service = TestBed.inject(ThemeService);
    // The theme->DOM/localStorage sync runs as a signal effect, which Angular
    // schedules async — flush it so assertions can rely on it having run.
    TestBed.flushEffects();
    return service;
  }

  it('falls back to dark when there is no stored preference and the OS has no light-mode preference', () => {
    const service = create();
    expect(service.theme()).toBe('dark');
  });

  it('picks up a previously stored theme instead of the OS default', () => {
    localStorage.setItem('portfolio-theme', 'light');
    const service = create();
    expect(service.theme()).toBe('light');
  });

  it('toggle() flips between dark and light', () => {
    const service = create();
    const before = service.theme();
    service.toggle();
    expect(service.theme()).not.toBe(before);
    service.toggle();
    expect(service.theme()).toBe(before);
  });

  it('set() applies the given mode and reflects it onto <html data-theme>', () => {
    const service = create();
    service.set('light');
    TestBed.flushEffects();
    expect(service.theme()).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('persists the chosen theme so a reload remembers it', () => {
    const service = create();
    service.set('light');
    TestBed.flushEffects();
    expect(localStorage.getItem('portfolio-theme')).toBe('light');
  });
});

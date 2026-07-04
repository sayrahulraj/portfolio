import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, signal } from '@angular/core';
import { ThemeMode } from '../models/portfolio.models';

const STORAGE_KEY = 'portfolio-theme';

/**
 * Owns the active colour theme. Persists the choice to localStorage,
 * restores it on load, and falls back to the OS preference.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly window = this.document.defaultView;

  readonly theme = signal<ThemeMode>(this.resolveInitialTheme());

  constructor() {
    // Reflect theme changes to the <html data-theme> attribute + storage.
    effect(() => {
      const mode = this.theme();

      this.document.documentElement.setAttribute('data-theme', mode);
      this.window?.localStorage.setItem(STORAGE_KEY, mode);
    });
  }

  toggle(): void {
    this.theme.update((mode) => (mode === 'dark' ? 'light' : 'dark'));
  }

  set(mode: ThemeMode): void {
    this.theme.set(mode);
  }

  private resolveInitialTheme(): ThemeMode {
    const stored = this.window?.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;

    if (stored === 'dark' || stored === 'light') {
      return stored;
    }

    const prefersLight =
      this.window?.matchMedia?.('(prefers-color-scheme: light)').matches;

    return prefersLight ? 'light' : 'dark';
  }
}
import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';
import { PROFILE } from '../data/portfolio.data';

export type ResumeState = 'idle' | 'downloading' | 'unavailable' | 'done';

/**
 * Downloads the resume PDF directly (no new tab). If the file is missing,
 * exposes a friendly `unavailable` state instead of throwing. Updating the
 * resume later only requires replacing the PDF at PROFILE.resumePath.
 */
@Injectable({ providedIn: 'root' })
export class ResumeService {
  private readonly document = inject(DOCUMENT);

  readonly state = signal<ResumeState>('idle');
  readonly unavailableMessage =
    'Resume is currently unavailable. Please try again later.';

  async download(): Promise<void> {
    if (this.state() === 'downloading') {
      return;
    }

    this.state.set('downloading');

    try {
      const response = await fetch(PROFILE.resumePath, { cache: 'no-store' });
      const contentType = response.headers.get('content-type') ?? '';

      // A dev server returns index.html (200) for missing files – guard on type.
      if (!response.ok || !contentType.includes('pdf')) {
        this.state.set('unavailable');
        return;
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const anchor = this.document.createElement('a');

      anchor.href = url;
      anchor.download = PROFILE.resumeFileName;
      this.document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();

      URL.revokeObjectURL(url);

      this.state.set('done');
    } catch {
      this.state.set('unavailable');
    }
  }

  reset(): void {
    this.state.set('idle');
  }
}
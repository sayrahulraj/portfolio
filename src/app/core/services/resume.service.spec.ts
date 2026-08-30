import { TestBed } from '@angular/core/testing';
import { ResumeService } from './resume.service';

describe('ResumeService', () => {
  let service: ResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeService);
  });

  afterEach(() => {
    service.reset();
  });

  it('starts out idle', () => {
    expect(service.state()).toBe('idle');
  });

  it('downloads the PDF and triggers a save when the file is present', async () => {
    const pdf = new Blob(['%PDF-1.4'], { type: 'application/pdf' });
    spyOn(window, 'fetch').and.resolveTo(
      new Response(pdf, { status: 200, headers: { 'Content-Type': 'application/pdf' } })
    );
    spyOn(HTMLAnchorElement.prototype, 'click');

    await service.download();

    expect(service.state()).toBe('done');
    expect(HTMLAnchorElement.prototype.click).toHaveBeenCalled();
  });

  it('falls back to "unavailable" when the server returns a page instead of the PDF', async () => {
    // This is what a dev server does for a missing static file — 200 + index.html —
    // so a plain response.ok check isn't enough, which is why the service also
    // checks the content type.
    const html = new Blob(['<html></html>'], { type: 'text/html' });
    spyOn(window, 'fetch').and.resolveTo(
      new Response(html, { status: 200, headers: { 'Content-Type': 'text/html' } })
    );

    await service.download();

    expect(service.state()).toBe('unavailable');
  });

  it('falls back to "unavailable" when the request itself fails', async () => {
    spyOn(window, 'fetch').and.rejectWith(new Error('network down'));

    await service.download();

    expect(service.state()).toBe('unavailable');
  });

  it('ignores a second download() call while one is already in flight', async () => {
    let resolveFetch!: (value: Response) => void;
    spyOn(window, 'fetch').and.returnValue(new Promise((resolve) => (resolveFetch = resolve)));

    const first = service.download();
    const second = service.download();
    expect(service.state()).toBe('downloading');

    resolveFetch(
      new Response(new Blob(['%PDF']), { status: 200, headers: { 'Content-Type': 'application/pdf' } })
    );
    await Promise.all([first, second]);

    expect(window.fetch).toHaveBeenCalledTimes(1);
  });
});

import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PROFILE, SOCIALS } from '../../core/data/portfolio.data';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { RippleDirective } from '../../shared/directives/ripple.directive';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    IconComponent,
    SectionHeadingComponent,
    RippleDirective,
    RevealDirective,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  private readonly sanitizer = inject(DomSanitizer);

  protected readonly profile = PROFILE;
  protected readonly socials = SOCIALS;

  protected readonly submitted = signal(false);
  protected readonly success = signal(false);

  protected readonly mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps.app.goo.gl/gDBdbJXVeEaT5Jnm6');

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  invalid(control: keyof typeof this.form.controls): boolean {
    const c = this.form.controls[control];
    return c.invalid && (c.touched || this.submitted());
  }

  submit(): void {
    this.submitted.set(true);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // No backend wired — simulate a successful send and reset.
    this.success.set(true);
    this.form.reset();
    this.submitted.set(false);

    setTimeout(() => this.success.set(false), 5000);
  }
}
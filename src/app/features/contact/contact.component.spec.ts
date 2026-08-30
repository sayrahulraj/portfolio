import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { EmailService } from '../../core/services/email.service';

// form/success/sendError are intentionally `protected` on the component — fine
// to reach into for a unit test, just not from other app code. This narrow
// view is enough to drive the form and read the result without resorting to `any`.
interface ContactComponentInternals {
  form: {
    setValue(value: { name: string; email: string; subject: string; message: string }): void;
  };
  success(): boolean;
  sendError(): boolean;
}

function internals(component: ContactComponent): ContactComponentInternals {
  return component as unknown as ContactComponentInternals;
}

describe('ContactComponent', () => {
  let fixture: ComponentFixture<ContactComponent>;
  let component: ContactComponent;
  let emailService: jasmine.SpyObj<EmailService>;

  beforeEach(async () => {
    emailService = jasmine.createSpyObj('EmailService', ['send']);

    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [{ provide: EmailService, useValue: emailService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function fillFormWithValidValues(): void {
    internals(component).form.setValue({
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      subject: 'Hello',
      message: 'This message is long enough to pass validation.',
    });
  }

  it('blocks submission while required fields are empty, without calling EmailJS', () => {
    component.submit();

    expect(emailService.send).not.toHaveBeenCalled();
    expect(component.invalid('name')).toBeTrue();
    expect(component.invalid('email')).toBeTrue();
  });

  it('sends the message and shows a success confirmation once EmailJS resolves', async () => {
    emailService.send.and.resolveTo();
    fillFormWithValidValues();

    component.submit();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(emailService.send).toHaveBeenCalledWith({
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      subject: 'Hello',
      message: 'This message is long enough to pass validation.',
    });
    expect(internals(component).success()).toBeTrue();
    expect(fixture.nativeElement.textContent).toContain('Your message has been sent');
  });

  it('shows an error state instead of a success message when EmailJS rejects', async () => {
    emailService.send.and.rejectWith(new Error('EmailJS is down'));
    fillFormWithValidValues();

    component.submit();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(internals(component).sendError()).toBeTrue();
    expect(internals(component).success()).toBeFalse();
    expect(fixture.nativeElement.textContent).toContain('Failed to send');
  });
});

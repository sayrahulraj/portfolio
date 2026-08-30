import { TestBed } from '@angular/core/testing';
import emailjs from '@emailjs/browser';
import { EmailService } from './email.service';

describe('EmailService', () => {
  let service: EmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailService);
  });

  it('forwards the contact form fields to EmailJS in the shape the template expects', async () => {
    const sendSpy = spyOn(emailjs, 'send').and.resolveTo({ status: 200, text: 'OK' });

    await service.send({
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      subject: 'Hello',
      message: 'Just saying hi.',
    });

    expect(sendSpy).toHaveBeenCalledTimes(1);
    const [, , templateParams] = sendSpy.calls.mostRecent().args;
    expect(templateParams).toEqual(
      jasmine.objectContaining({
        from_name: 'Ada Lovelace',
        from_email: 'ada@example.com',
        subject: 'Hello',
        message: 'Just saying hi.',
        reply_to: 'ada@example.com',
      })
    );
  });

  it('rejects when EmailJS rejects, so the caller can show an error state', async () => {
    spyOn(emailjs, 'send').and.rejectWith(new Error('EmailJS is down'));

    await expectAsync(
      service.send({ name: 'Ada', email: 'ada@example.com', subject: 'Hi', message: 'Test' })
    ).toBeRejected();
  });
});

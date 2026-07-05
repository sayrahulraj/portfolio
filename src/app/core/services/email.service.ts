import { Injectable } from "@angular/core";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from "../config/emailjs.config";

export interface ContactPayload {
    name: string;
    email: string,
    subject: string,
    message: string;
}

@Injectable({ providedIn: 'root'})
export class EmailService {
    send(payload: ContactPayload): Promise<void> {
        return emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            {
                from_name: payload.name,
                from_email: payload.email,
                subject: payload.subject,
                message: payload.message,
                reply_to: payload.email
            },
            { publicKey: EMAILJS_CONFIG.publicKey}
        )
        .then(()=>void 0);
    }
}
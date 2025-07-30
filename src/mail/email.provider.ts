import { FactoryProvider } from "@nestjs/common";
import { EMAIL } from "@strings";
import { createTransport, type Transporter } from "nodemailer";
import type { SentMessageInfo, Options } from "nodemailer/lib/smtp-transport";

export const emailProvider: FactoryProvider<Transporter<SentMessageInfo, Options>> = {
    provide: EMAIL,
    useFactory: () => createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD
        }
    })
};
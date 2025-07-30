import { Global, Module } from "@nestjs/common";
import { MailService } from "./mail.service";
import { emailProvider } from "./email.provider";

@Global()
@Module({
    imports: [],
    controllers: [],
    providers: [MailService, emailProvider],
    exports: [MailService]
})
export class MailModule { }
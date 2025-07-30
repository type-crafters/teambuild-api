import { MailModule } from "./mail/mail.module";
import { Module } from "@nestjs/common";
import { OrganizationModule } from "./organization/organization.module";
import { TaskModule } from "./task/task.module";
import { TeamModule } from "./team/team.module";
import { UserModule } from "./user/user.module";
import { DatabaseModule } from "./database/database.module";

@Module({
    imports: [
        DatabaseModule,
        MailModule,
        OrganizationModule,
        TaskModule,
        TeamModule,
        UserModule,
    ],
    controllers: [],
    providers: []
})
export class AppModule { }
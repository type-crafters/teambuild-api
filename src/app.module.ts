import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./database/database.module";
import { MailModule } from "./mail/mail.module";
import { Module } from "@nestjs/common";
import { OrganizationMembersModule } from "./organization-member/organization-member.module";
import { OrganizationModule } from "./organization/organization.module";
import { OrganizationProjectModule } from "./organization-project/organization-project.module";
import { ProjectModule } from "./project/project.module";
import { TaskModule } from "./task/task.module";
import { TeamModule } from "./team/team.module";
import { UserModule } from "./user/user.module";
import { TeamMemberModule } from "./team-member/team-member.module";

@Module({
    imports: [
        ConfigModule.forRoot(),
        DatabaseModule,
        MailModule,
        OrganizationMembersModule,
        OrganizationModule,
        OrganizationProjectModule,
        ProjectModule,
        TaskModule,
        TeamModule,
        UserModule,
        TeamMemberModule
    ],
    controllers: [],
    providers: []
})
export class AppModule { }
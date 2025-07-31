import { Module } from "@nestjs/common";
import { teamMemberRepository } from "./team-member.repository";

@Module({
    controllers: [],
    providers: [teamMemberRepository]
})
export class TeamMemberModule { }
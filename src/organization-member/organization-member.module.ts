import { Module } from "@nestjs/common";
import { organizationMemberRepository } from "./organization-member.repository";

@Module({
    controllers: [],
    providers: [organizationMemberRepository]
})
export class OrganizationMemberModule { }
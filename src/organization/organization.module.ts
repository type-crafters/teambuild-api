import { Module } from "@nestjs/common";
import { OrganizationController } from "./organization.controller";
import { OrganizationService } from "./organization.service";
import { organizationRepository } from "./organization.repository";

@Module({
    controllers: [OrganizationController],
    providers: [OrganizationService, organizationRepository]
})
export class OrganizationModule { }
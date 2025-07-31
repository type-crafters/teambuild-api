import { FactoryProvider } from "@nestjs/common";
import { DataSource, MongoRepository } from "typeorm";
import { OrganizationMember } from "./organization-member.entity";
import { ORGANIZATION_MEMBER_REPOSITORY, DATA_SOURCE } from "@strings";

export const organizationMemberRepository: FactoryProvider<MongoRepository<OrganizationMember>> = {
    provide: ORGANIZATION_MEMBER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getMongoRepository(OrganizationMember),
    inject: [DATA_SOURCE]
};
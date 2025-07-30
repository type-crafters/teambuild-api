import { FactoryProvider } from "@nestjs/common";
import { DataSource, MongoRepository } from "typeorm";
import { Organization } from "./organization.entity";
import { ORGANIZATION_REPOSITORY, DATA_SOURCE } from "@strings";

export const organizationRepository: FactoryProvider<MongoRepository<Organization>> = {
    provide: ORGANIZATION_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getMongoRepository(Organization),
    inject: [DATA_SOURCE]
};
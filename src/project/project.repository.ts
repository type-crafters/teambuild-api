import { FactoryProvider } from "@nestjs/common";
import { DataSource, MongoRepository } from "typeorm";
import { Project } from "./project.entity";
import { PROJECT_REPOSITORY, DATA_SOURCE } from "@strings";

export const projectRepository: FactoryProvider<MongoRepository<Project>> = {
    provide: PROJECT_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getMongoRepository(Project),
    inject: [DATA_SOURCE]
};
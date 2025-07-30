import { FactoryProvider } from "@nestjs/common";
import { DataSource, MongoRepository } from "typeorm";
import { Team } from "./team.entity";
import { TEAM_REPOSITORY, DATA_SOURCE } from "@strings";

export const teamRepository: FactoryProvider<MongoRepository<Team>> = {
    provide: TEAM_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getMongoRepository(Team),
    inject: [DATA_SOURCE]
};
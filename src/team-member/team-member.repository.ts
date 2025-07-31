import { FactoryProvider } from "@nestjs/common";
import { DataSource, MongoRepository } from "typeorm";
import { TeamMember } from "./team-member.entity";
import { TEAM_MEMBER_REPOSITORY, DATA_SOURCE } from "@strings";

export const teamMemberRepository: FactoryProvider<MongoRepository<TeamMember>> = {
    provide: TEAM_MEMBER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getMongoRepository(TeamMember),
    inject: [DATA_SOURCE]
};
import { Module } from "@nestjs/common";
import { TeamController } from "./team.controller";
import { TeamService } from "./team.service";
import { teamRepository } from "./team.repository";

@Module({
    controllers: [TeamController],
    providers: [TeamService, teamRepository]
})
export class TeamModule { }
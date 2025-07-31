import { Module } from "@nestjs/common";
import { ProjectController } from "./project.controller";
import { ProjectService } from "./project.service";
import { projectRepository } from "./project.repository";

@Module({
    controllers: [ProjectController],
    providers: [ProjectService, projectRepository]
})
export class ProjectModule { }
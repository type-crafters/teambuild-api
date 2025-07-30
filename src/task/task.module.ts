import { Module } from "@nestjs/common";
import { TaskController } from "./task.controller";
import { TaskService } from "./task.service";
import { taskRepository } from "./task.repository";

@Module({
    controllers: [TaskController],
    providers: [TaskService, taskRepository]
})
export class TaskModule { }
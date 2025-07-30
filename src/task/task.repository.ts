import { FactoryProvider } from "@nestjs/common";
import { DataSource, MongoRepository } from "typeorm";
import { Task } from "./task.entity";
import { TASK_REPOSITORY, DATA_SOURCE } from "@strings";

export const taskRepository: FactoryProvider<MongoRepository<Task>> = {
    provide: TASK_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getMongoRepository(Task),
    inject: [DATA_SOURCE]
};
import { FactoryProvider } from "@nestjs/common";
import { DataSource, MongoRepository } from "typeorm";
import { User } from "./user.entity";
import { USER_REPOSITORY, DATA_SOURCE } from "@strings";

export const userRepository: FactoryProvider<MongoRepository<User>> = {
    provide: USER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getMongoRepository(User),
    inject: [DATA_SOURCE]
};
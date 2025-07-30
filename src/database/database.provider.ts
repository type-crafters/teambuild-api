import { FactoryProvider } from "@nestjs/common";
import { DATA_SOURCE } from "@strings";
import { DataSource } from "typeorm";

export const databaseProvider: FactoryProvider<DataSource> = {
    provide: DATA_SOURCE,
    useFactory: async () => new DataSource({
        type: "mongodb",
        database: "team_build",
        host: process.env.MONGO_HOST,
        port: parseInt(process.env.MONGO_PORT ?? "27017"),
        entities: [import.meta.dirname + "../**/*.entity.ts"]
    }).initialize()
}
import { Global, Module } from "@nestjs/common";
import { databaseProvider } from "./database.provider";

@Global()
@Module({
    imports: [],
    controllers: [],
    providers: [databaseProvider],
    exports: [databaseProvider]
})
export class DatabaseModule { }
import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { userRepository } from "./user.repository";

@Module({
    controllers: [UserController],
    providers: [UserService, userRepository]
})
export class UserModule { }
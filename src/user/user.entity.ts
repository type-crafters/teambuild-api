import { Entity, ObjectIdColumn } from "typeorm";
import { ObjectId } from "mongodb";

@Entity("users")
export class User {
    @ObjectIdColumn()
    public _id?: ObjectId;
}
import { Entity, ObjectIdColumn } from "typeorm";
import { ObjectId } from "mongodb";

@Entity("tasks")
export class Task {
    @ObjectIdColumn()
    public _id?: ObjectId;
}
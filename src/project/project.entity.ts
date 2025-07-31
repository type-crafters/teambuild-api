import { Entity, ObjectIdColumn } from "typeorm";
import { ObjectId } from "mongodb";

@Entity("projects")
export class Project {
    @ObjectIdColumn()
    public _id?: ObjectId;
}
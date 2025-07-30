import { Entity, ObjectIdColumn } from "typeorm";
import { ObjectId } from "mongodb";

@Entity("teams")
export class Team {
    @ObjectIdColumn()
    public _id?: ObjectId;
}
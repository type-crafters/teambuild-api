import { Entity, ObjectIdColumn } from "typeorm";
import { ObjectId } from "mongodb";

@Entity("organizations")
export class Organization {
    @ObjectIdColumn()
    public _id?: ObjectId;
}
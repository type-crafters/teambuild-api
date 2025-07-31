import { Entity, ObjectIdColumn } from "typeorm";
import { ObjectId } from "mongodb";

@Entity("teamMembers")
export class TeamMember {
    @ObjectIdColumn()
    public _id?: ObjectId;
}
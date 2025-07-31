import { Column, Entity, ObjectIdColumn } from "typeorm";
import { ObjectId } from "mongodb";

@Entity("organizationMembers")
export class OrganizationMember {
    @ObjectIdColumn()
    public _id?: ObjectId;

    @Column()
    public organizationId?: ObjectId;

    @Column()
    public userId?: ObjectId;
}
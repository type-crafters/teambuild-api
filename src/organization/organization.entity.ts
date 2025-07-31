import { Column, Entity, ObjectIdColumn } from "typeorm";
import { ObjectId } from "mongodb";

@Entity("organizations")
export class Organization {
    @ObjectIdColumn()
    public _id?: ObjectId;

    @Column()
    public accountName?: string;

    @Column()
    public slug?: string;

    @Column()
    public createdAt?: Date;

    @Column()
    public ownerId?: ObjectId;

    @Column()
    public verified?: boolean;
}
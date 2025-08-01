import { Column, Entity, ObjectIdColumn } from "typeorm";
import { ObjectId } from "mongodb";

@Entity("users")
export class User {
    @ObjectIdColumn()
    public _id?: ObjectId;

    @Column()
    public username?: string;

    @Column()
    public email?: string;

    @Column()
    public password?: string;

    @Column()
    public createdAt?: Date;
}
import { Column, Entity, ObjectIdColumn } from "typeorm";
import { ObjectId } from "mongodb";

@Entity("comments")
export class Comment {
    @ObjectIdColumn()
    public _id?: ObjectId;

    @Column()
    public userId?: ObjectId;

    @Column()
    public taskId?: ObjectId;

    @Column()
    public content?: string;

    @Column()
    public files?: string[];
}
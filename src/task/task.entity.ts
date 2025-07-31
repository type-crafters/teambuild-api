import { Column, Entity, ObjectIdColumn } from "typeorm";
import { ObjectId } from "mongodb";
import { TaskAssignment } from "./task-assignment.entity";
import { TaskHistory } from "./task-history.entity";

@Entity("tasks")
export class Task {
    @ObjectIdColumn()
    public _id?: ObjectId;

    @Column()
    public projectId?: ObjectId;

    @Column()
    public creatorId?: ObjectId;

    @Column()
    public title?: string;

    @Column()
    public description?: string;

    @Column()
    public files?: string[];
 
    @Column()
    public assignedTo?: TaskAssignment[];

    @Column()
    public createdAt?: Date;

    @Column()
    public history?: TaskHistory[];
}
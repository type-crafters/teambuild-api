import { Column } from "typeorm";
import { ObjectId } from "mongodb";
import { TaskAction } from "src/common/enum/task-action.enum";

export class TaskHistory {
    @Column()
    public actorId?: ObjectId;

    @Column()
    public action?: TaskAction;

    @Column()
    public at?: Date;
}
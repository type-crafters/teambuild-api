import { Column } from "typeorm";
import { ObjectId } from "mongodb";
import { TaskAssignee } from "src/common/enum/task-assignee.enum";


export class TaskAssignment {
    @Column()
    public assigneeId?: ObjectId;

    @Column()
    public assigneeType?: TaskAssignee;
}
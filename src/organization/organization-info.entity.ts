import { Column, Entity, ObjectIdColumn } from "typeorm";
import { ObjectId } from "mongodb";
import { SocialHandle } from "../common/entity/social-handle.entity";

@Entity("organizationInfo")
export class OrganizationInfo {
    @ObjectIdColumn()
    public _id?: ObjectId;
    @Column()
    public organizaionId?: ObjectId;

    @Column()
    public profilePicture?: string;

    @Column()
    public publicName?: string;
    
    @Column()
    public publicEmail?: string;
    
    @Column()
    public description?: string;

    @Column(t => SocialHandle)
    public socialHandles?: SocialHandle[];
}
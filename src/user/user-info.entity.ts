import { Column, Entity, ObjectIdColumn } from "typeorm";
import { ObjectId } from "mongodb";
import { SocialHandle } from "src/common/entity/social-handle.entity";
import { Theme } from "src/common/enum/theme.enum";
import { Locale } from "src/common/entity/locale.entity";

@Entity("userInfo")
export class UserInfo {
    @ObjectIdColumn()
    public _id?: ObjectId;

    @Column()
    public fullName?: string;

    @Column()
    public publicEmail?: string;

    @Column()
    public bio?: string;

    @Column((t) => SocialHandle)
    public socialHandles?: SocialHandle[]

    @Column()
    public theme?: Theme;

    @Column()
    public locale?: Locale;
}
import { Column } from "typeorm";

export class SocialHandle {
    @Column()
    public name?: string;

    @Column()
    public href?: string;
}
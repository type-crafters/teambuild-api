import { Column } from "typeorm";

export class Locale {
    @Column()
    dateFormat?: string;

    @Column()
    timeFormat?: string;

    @Column()
    currency?: string;

    @Column()
    language?: string;
}
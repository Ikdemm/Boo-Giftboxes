import { v4 as uuid } from 'uuid';
/* Not sure ..... */

export class Check {
    _id?: string;
    date: Date;
    status: string;
    code: uuid;
}
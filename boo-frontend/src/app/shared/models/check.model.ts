import { Partner } from "./partner.model";
import { Box } from "./box.model";

export class Check {
    _id?: string;
    price: number;
    date: Date;
    deadline: Date;
    isCashed: boolean;
    isPayed: boolean;
    partner: Partner;
    box: Box;
}
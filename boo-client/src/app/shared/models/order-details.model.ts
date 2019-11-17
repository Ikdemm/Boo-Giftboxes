import { Box } from './box.model';
import { Check } from './check.model';

export class OrderDetails {
    _id?: string;
    quantity: number;
    price: number;
    box: Box;
    checks: Array<Check>;
}
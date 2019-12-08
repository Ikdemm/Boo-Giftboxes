import { Box } from './box.model';
import { Check } from './check.model';

export class OrderDetails {
    id?: string;
    quantity: number;
    price: number;
    box: Box;
    checks: Array<Check>;
}
import {Box} from './box.model';
import {Check} from './check.model';

export class OrderDetails {
    id?: string;
    quantite: number;
    price: number;
    coffret: Box;
    cheques: Array<Check>;
}

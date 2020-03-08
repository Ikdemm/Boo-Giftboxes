import {OrderDetails} from './order-details.model';
import {User} from './user.model';

export class Order {
    _id?: string;
    date: Date;
    address: string;
    totalPrice: number;
    status: string;
    detailCommandes: Array<OrderDetails>;
    user: User;
}

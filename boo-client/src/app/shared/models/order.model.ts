import { OrderDetails } from './order-details.model';
import { User } from './user.model';

export class Order {
    _id?: string;
    date: Date;
    address: string;
    totalPrice: number;
    status: string;
    orderDetails: Array<OrderDetails>;
    user: User;
}
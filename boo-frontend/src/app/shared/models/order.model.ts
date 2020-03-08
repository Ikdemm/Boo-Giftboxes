import {Customer} from './customer.model';
import {Address} from './address.model';
import {Box} from './box.model';

export class Order {
    _id?: string;
    customer: Customer;
    date: Date;
    deliveryAddress: Address;
    totalPrice: number;
    boxes: Box[];
    isLaunched: boolean;
    isDelivered: boolean;
}
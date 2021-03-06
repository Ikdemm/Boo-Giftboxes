import {User} from './user.model';
import {Address} from './address.model';

export class Customer extends User {
    firstname: string;
    lastname: string;
    username: string;
    address: Address;
}
import {Role} from './role.model';

export class User {
    id: string;
    name: string;
    imageUrl: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    emailVerified: boolean = false;
    password: string;
    roles: Role;
}

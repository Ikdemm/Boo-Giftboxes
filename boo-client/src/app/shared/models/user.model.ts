import { Role } from './role.model';

export class User {
    _id?: string;
    name: string;
    imageUrl: string;
    phone: string;
    city: string;
    state: string;
    postalCode: string;
    emailVerified: boolean = false;
    password: string;
    roles: Role;
}
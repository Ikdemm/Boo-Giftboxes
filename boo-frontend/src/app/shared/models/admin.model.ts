import { User } from "./user.model";

export class Admin extends User {
    firstname: string;
    lastname: string;
    icon: File;
}
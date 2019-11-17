import { User } from "./user.model";

export class Category {
    _id?: string;
    name: string;
    imageUrl: string;
    partners: Array<User>;
}
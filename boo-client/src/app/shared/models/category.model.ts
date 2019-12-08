import { User } from "./user.model";

export class Category {
    id?: string;
    name: string;
    imageUrl: string;
    partners: Array<User>;
}
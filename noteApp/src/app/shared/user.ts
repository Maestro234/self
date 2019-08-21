import { Note } from './note';
import { Subject } from './subject';

export class User {
    user_id: number;
    username: string;
    password: string;
    email: string;
    notes: Array<Note>;
    friendIds: Array<number>;
}

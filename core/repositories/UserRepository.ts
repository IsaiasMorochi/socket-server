import { User } from "../models/User";

export interface UserRespository {
    
    addUser( user: User ): User;

    updateNameById( id: string, username: string ): void;

    getListUsers(): User[];

    getUser( id: string ): User | undefined;

    deleteUser( id: string ): User | undefined;

    getUserInRom( room: string ): any;

}
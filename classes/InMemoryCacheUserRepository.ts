import { User } from "./user";
import { UserRespository } from './UserRepository'

export class InMemoryCacheUserRepository implements UserRespository {

    private listUsers: User[] = [];

    constructor() {}

    public addUser( user: User ) {
        this.listUsers.push( user );
        console.log('***** Start SAVE USER *****');
        console.log(this.listUsers);
        console.log('***** End SAVE USER *****');
        return user;
    }

    getUser(id: string): User | undefined {
        return ( this.listUsers.length > 0 ) ? this.listUsers.find( user => user.id === id ) : new User('') ;
    }

    public updateNameById( id: string, username: string ) {
        for ( let user of this.listUsers ) {
            if ( user.id === id ) {
                user.username = username;
                break;
            }
        }
        console.log('***** Start UPDATE USER *****');
        console.log(this.listUsers);
        console.log('***** End UPDATE USER *****');
    }

    deleteUser(id: string): User | undefined {
        const userTemp = this.getUser( id );
        this.listUsers = this.listUsers.filter( user => user.id !== id);
        console.log('***** Start DELETE USER *****');
        console.log(this.listUsers);
        console.log('***** End DELETE USER *****');
        return userTemp;
    }

    public getListUsers(): User[] {
        return this.listUsers;
    }

    getUserInRom( room: string ): any {
        return this.listUsers.filter( userx => userx.room === room ) ;
    }

}
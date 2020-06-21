export class User {
    public id: string;
    public username: string;
    public room: string;

    constructor( id: string ) {
        this.id = id;
        this.username = 'sin-name';
        this.room = 'sin-room'
    }
}
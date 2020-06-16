import express from 'express';
import { environment } from '../environments/environment'

export default class Server {

    public app: express.Application; 
    public hostname: string;
    public port: number;

    constructor() {
        this.app = express();
        this.hostname = environment.HOSTNAME
        this.port = environment.SERVER_PORT;
    }

    start( callback: VoidFunction ) {
        this.app.listen( this.port, this.hostname, callback);
    }

}
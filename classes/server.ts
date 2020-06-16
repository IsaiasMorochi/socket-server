import express from 'express';
import { environment } from '../environments/environment'
import socketIO from 'socket.io';
import http from 'http';

export default class Server {

    public app: express.Application; 
    public hostname: string;
    public port: number;

    public io: socketIO.Server;
    private httpServer: http.Server;

    private constructor() {
        this.app = express();
        this.hostname = environment.HOSTNAME
        this.port = environment.SERVER_PORT;

        // socket necesita recibir la conf del servidor (Http)
        this.httpServer = new http.Server(this.app);
        this.io = socketIO( this.httpServer );

        this.listenSockets();

    }

    start( callback: VoidFunction ) {
        this.httpServer.listen( this.port, this.hostname, callback);
    }

    private listenSockets() {
        console.log('***** Start Escuchar conexiones - socket *****');
        this.io.on('connection', client => {
            console.log('Cliente conectado.');
        })
        console.log('***** End Escuchar conexiones - socket *****');
    }

}
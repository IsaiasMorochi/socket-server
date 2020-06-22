import express from 'express';
import { environment } from '../environments/environment'
import socketIO from 'socket.io';
import http from 'http';

import * as socket from '../sockets/socket';

export default class Server {

    private static _instance: Server;

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
        
        this.io.on('connection', client => {

            // Conectar cliente
            socket.connectClient( client );

            // Configurar usuario
            socket.configUser( client, this.io );

            // Mensajes
            socket.message( client, this.io );

            // Desconectar
            socket.disconnect( client, this.io );

            // Obtener usuarios en linea
            socket.getOnlineUsers( client, this.io );

            // Mapas
            socket.newMarker( client );

            socket.deleteMarker( client );

        });

    }

    public static get instance() {
        return this._instance || ( this._instance = new this() );
    }

}
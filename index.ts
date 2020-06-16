import Server from "./classes/server";
import router from "./routes/router";
import bodyParser from "body-parser";
import cors from 'cors';
import socketIO from 'socket.io';

const server = new Server();

// BodyParser (Serializa los objetos)
server.app.use( bodyParser.urlencoded({ extended: true }));
server.app.use( bodyParser.json() );

// CORS
server.app.use( cors({ origin: true, credentials: true }))

// Rutas
server.app.use('/', router);

server.start( () => {
    console.log('***** Start Server *****');
    console.log(`Servidor corriendo en el puerto ${ server.port }`);
    console.log('***** End Server *****');
});
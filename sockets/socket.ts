import { Socket } from 'socket.io';
import { UserRespository } from '../classes/UserRepository';
import { InMemoryCacheUserRepository } from '../classes/InMemoryCacheUserRepository';
import { User } from '../classes/user';

export const userConnected: UserRespository = new InMemoryCacheUserRepository();

export const connectClient = ( client: Socket ) => {
    const user = new User( client.id );
    console.log('Cliente conectado.');
    userConnected.addUser( user );
}

export const disconnect = ( client: Socket ) => {
    client.on('disconnect', () => {
        console.log('Cliente desconectado.');
        userConnected.deleteUser( client.id );
    });
}

// escuchar mensajes
export const message = ( client: Socket, io: SocketIO.Server ) => {
    client.on('message', ( payload: { de: string, body: string }) => {
        console.log('Mensaje recibido: ', payload);
        io.emit('new-message', payload);
    });
}

export const configUser = ( client: Socket, io: SocketIO.Server ) => {
    client.on('config-user', ( payload: { username: string }, callback: Function) => {
        console.log('Configurando usuario: ', payload);
        userConnected.updateNameById( client.id , payload.username );
        callback({
            ok: true,
            message: `Usuario ${ payload.username }, configurado.`
        })
    });
}
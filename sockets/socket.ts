import { Socket } from 'socket.io';

export const disconnect = ( client: Socket ) => {

    client.on('disconnect', () => {
        console.log('Cliente desconectado.');
    });

}

// escuchar mensajes
export const message = ( client: Socket, io: SocketIO.Server ) => {
    client.on('message', ( payload: { de: string, body: string }) => {

        console.log('Mensaje recibido: ', payload);

        io.emit('new-message', payload);

    });
}
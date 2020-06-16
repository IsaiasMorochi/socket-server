import { Socket } from 'socket.io';

export const disconnect = ( client: Socket ) => {

    client.on('disconnect', () => {
        console.log('Cliente desconectado.');
    });

}

// escuchar mensajes
export const message = ( client: Socket ) => {
    client.on('message', ( payload: { de: string, body: string }) => {
        console.log('***** Start Mensaje *****');
        console.log('Mensaje recibido: ', payload);
        console.log('***** End Mensaje *****');
    });
}
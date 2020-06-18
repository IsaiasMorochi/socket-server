import { Router, Request, Response, request } from 'express';
import Server from '../classes/server';
import { usersConnected } from '../sockets/socket';

const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'Todo esta bien!!!'
    })
});


router.post('/mensajes', (req: Request, res: Response) => {

    const from = req.body.from;
    const body = req.body.body;

    const server = Server.instance;

    const payload = {
        from,
        body
    }

    server.io.emit( 'new-message', payload );

    res.json({
        ok: true,
        body
    })
});


router.post('/mensajes/:id', (req: Request, res: Response) => {

    const from = req.body.from;
    const body = req.body.body;
    const id     = req.params.id;

    const server = Server.instance;

    const payload = {
        from,
        body
    }
    server.io.in( id ).emit( 'message-private', payload );

    res.json({
        ok: true,
        from,    
        body,
        id
    })
});

// Servicio para obtener todos los IDs de los usuarios
router.get('/usuarios', (req: Request, res: Response) => {

    const server = Server.instance;

    server.io.clients( ( err: any, clients: string[] ) => {
        if (err) {
            return res.json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            clients
        });
    });

});

// Servicio para obtener todos los Usuarios y sus Nombers de los usuarios
router.get('/usuarios/detalle', (req: Request, res: Response) => {

    res.json({
        ok: true,
        clients: usersConnected.getListUsers()
    });

});



export default router;
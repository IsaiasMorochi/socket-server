import { Router, Request, Response, request } from 'express';
import Server from '../classes/server';

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

export default router;
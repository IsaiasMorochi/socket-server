import { Router, Request, Response, request } from 'express';

const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'Todo esta bien!!!'
    })
});


router.post('/mensajes', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;

    res.json({
        ok: true,
        cuerpo
    })
});


router.post('/mensajes/:id', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const id     = req.params.id;

    res.json({
        ok: true,
        cuerpo,
        id
    })
});

export default router;
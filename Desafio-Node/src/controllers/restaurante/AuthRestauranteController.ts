import { Request, Response } from 'express';
import { AuthRestauranteService } from '../../services/restaurante/AuthRestauranteService';

class AuthRestauranteController {
    async handle(req: Request, res: Response) {
        const { email, senha } = req.body;
        const authRestauranteService = new AuthRestauranteService();

        const auth = await authRestauranteService.execute({ 
            email, 
            senha 
        });

        return res.json(auth);
    }
}

export { AuthRestauranteController };
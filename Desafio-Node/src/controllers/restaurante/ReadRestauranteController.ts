import { Request, Response } from "express";
import { ReadRestauranteService } from "../../services/restaurante/ReadRestauranteService";

class ReadRestauranteController {
    async handle(req: Request, res: Response) {
        const restaurante_email = req.restaurante_email;
        const readRestauranteService = new ReadRestauranteService();
        const restaurante = await readRestauranteService.execute(restaurante_email);

        return res.json(restaurante);
    }
}

export { ReadRestauranteController };
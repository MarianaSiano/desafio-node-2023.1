import { Request, Response } from "express";
import { ReadRestauranteService } from "../../services/restaurante/ReadRestauranteService";

class ReadRestauranteController {
    async handle(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const readRestauranteService = new ReadRestauranteService();
        const restaurante = await readRestauranteService.execute(id);
        return res.json(restaurante);
    }
}

export { ReadRestauranteController };
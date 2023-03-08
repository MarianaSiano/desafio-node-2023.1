import { Request, Response } from "express";
import { DetailRestauranteService } from "../../services/restaurante/DetailRestauranteService";

class DetailRestauranteController {
    async handle(req: Request, res: Response) {
        const detailRestauranteService = new DetailRestauranteService();
        const restaurante = await detailRestauranteService.execute();

        return res.json(restaurante);
    }
}

export { DetailRestauranteController };
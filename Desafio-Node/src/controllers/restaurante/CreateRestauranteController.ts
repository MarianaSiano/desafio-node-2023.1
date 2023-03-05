import { Request, Response } from "express";
import { CreateRestauranteService } from "../../services/restaurante/restaurante";

class CreateRestauranteController {
    async handle(req: Request, res: Response) {
        const { nome, email, senha, categoria, cidade, endereco, telefone } = req.body;
        const createRestauranteService = new CreateRestauranteService();

        createRestauranteService.execute();

        return res.json({ok: true});
    }
}

export { CreateRestauranteController };
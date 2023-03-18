import { Request, Response } from "express";
import { CreateRestauranteService } from "../../services/restaurante/CreateRestauranteService";

class CreateRestauranteController {
    async handle(req: Request, res: Response) {
        const { nome, email, senha, categoria, cidade, endereco, telefone } = req.body;
        const createRestauranteService = new CreateRestauranteService();

        const restaurante = await createRestauranteService.execute({
            nome, 
            email, 
            senha, 
            categoria, 
            cidade, 
            endereco, 
            telefone
        });

        return res.json({restaurante});
    }
}

export { CreateRestauranteController };
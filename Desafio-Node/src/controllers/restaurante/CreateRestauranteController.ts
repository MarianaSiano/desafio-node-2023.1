import { Request, Response } from "express";

class CreateRestauranteController {
    async handle(req: Request, res: Response) {
        const { nome, email, senha, categoria, cidade, endereco, telefone } = req.body;
        return res.json({ok: true});
    }
}

export { CreateRestauranteController };
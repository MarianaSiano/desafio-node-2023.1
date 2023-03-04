import { Request, Response } from "express";

class CreateRestauranteController {
    async handle(request: Request, response: Response) {
        const { nome, endereco, telefone, email, senha } = request.body;
    
        return response.json({
        nome,
        endereco,
        telefone,
        email,
        senha,
        });
    }
}

export { CreateRestauranteController };
import { Request, Response } from "express";
import { UpdateRestauranteService } from "../../services/restaurante/UpdateRestauranteService";

class UpdateRestauranteController {
    async handle(req: Request, res: Response) {
        const { id, nome, email, senha, categoria, cidade, endereco, telefone } = req.body;
        const updateRestauranteService = new UpdateRestauranteService();

        const restaurante = await updateRestauranteService.execute({ id, nome, email, senha, categoria, cidade, endereco, telefone });

        try {
            restaurante;
            res.status(200).json({ message: "Restaurante atualizado com sucesso!" });
        }catch (err) {
            res.status(400).json({ message: "Erro ao atualizar restaurante!" });
        }

        return res.json(restaurante);
    }
}

export { UpdateRestauranteController };
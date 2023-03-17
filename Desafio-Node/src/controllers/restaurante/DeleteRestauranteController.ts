import {  Request, Response } from 'express';
import { DeleteRestauranteService } from '../../services/restaurante/DeleteRestauranteService';
class DeleteRestauranteController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const deleteRestauranteController = new DeleteRestauranteService();

        await deleteRestauranteController.execute(id)

        return res.status(200).json({message: "Restaurante deletado com sucesso"});
    }
}

export { DeleteRestauranteController}
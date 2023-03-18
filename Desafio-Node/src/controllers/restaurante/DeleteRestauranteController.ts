import { Request, Response } from "express";
import { DeleteRestauranteService } from "../../services/restaurante/DeleteRestauranteService";

class DeleteRestauranteController {
    async handle(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const resultado = await DeleteRestauranteService.deletarRecurso({id});
        
        try{
            if(!resultado) {
                throw new Error("Não foi possível deletar o restaurante");
            }
        }catch(err) {
            return res.status(400).json({
                message: err.message
            })
        } //Está dando problema para deletar o restaurante com id 4.

        res.send(resultado)
    }
}

export { DeleteRestauranteController };
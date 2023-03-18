import { Request, Response } from 'express';
import { DeletePedidoService } from '../../services/pedido/DeletePedidoService';

class DeletePedidoController {
    async handle(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const resultado = await DeletePedidoService.deletarRecurso({id});

        try{
            if(!resultado) {
                throw new Error("Não foi possível deletar o pedido");
            }
        }catch(err) {
            return res.status(400).json({
                message: err.message
            })
        }

        res.send(resultado)
    }
}

export { DeletePedidoController };
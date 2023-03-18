import { Request, Response } from 'express';
import { CreatePedidoService } from '../../services/pedido/CreatePedidoService';

class CreatePedidoController {
    async handle(req: Request, res: Response) {
        const { valor_total, nome_cliente, cidade_cliente, endereco_cliente, telefone_cliente, id_restaurante } = req.body;
        const createPedidoService = new CreatePedidoService();
        const pedido = await createPedidoService.execute({ valor_total, nome_cliente, cidade_cliente, endereco_cliente, telefone_cliente, id_restaurante });

        return res.json(pedido);
    }
}

export { CreatePedidoController };
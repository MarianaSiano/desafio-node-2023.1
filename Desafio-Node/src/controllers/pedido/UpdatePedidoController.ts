import { Request, Response } from 'express';
import { UpdatePedidoService } from '../../services/pedido/UpdatePedidoService';

class UpdatePedidoController {
    async handle(req: Request, res: Response) {
        const { id, valor_total, nome_cliente, cidade_cliente, endereco_cliente, telefone_cliente, id_restaurante } = req.body;
        const updatePedidoService = new UpdatePedidoService();

        const pedido = await updatePedidoService.execute({ id, valor_total, nome_cliente, cidade_cliente, endereco_cliente, telefone_cliente, id_restaurante });

        try {
            pedido;
            res.status(200).json({ message: 'Pedido atualizado com sucesso!' });
        }catch (err) {
            res.status(400).json({ message: 'Erro ao atualizar pedido!' });
        }

        return res.json(pedido);
    }
}

export { UpdatePedidoController };
import { Request, Response } from 'express';
import prismaClient from '../../prisma';

interface PedidoRequest {
    id: number;
    valor_total: string;
    nome_cliente: string;
    cidade_cliente: string;
    endereco_cliente: string;
    telefone_cliente: string;
    id_restaurante: number;
}

class ReadPedidosController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const pedido = await prismaClient.pedido.findFirst({
            where: {
                id: Number(id)
            },
            select: {
                id: true,
                valor_total: true,
                nome_cliente: true,
                cidade_cliente: true,
                endereco_cliente: true,
                telefone_cliente: true,
                id_restaurante: true
            }
        });

        if(!pedido) {
            return res.status(404).json({error: "Pedido não encontrado"});
        }

        const pedidoResponse = {
            id: pedido.id,
            valor_total: pedido.valor_total,
            nome_cliente: pedido.nome_cliente,
            cidade_cliente: pedido.cidade_cliente,
            endereco_cliente: pedido.endereco_cliente,
            telefone_cliente: pedido.telefone_cliente,
            id_restaurante: pedido.id_restaurante
        }

        return res.json(pedidoResponse);
    }
}

export { ReadPedidosController };
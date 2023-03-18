import prismaClient from "../../prisma";

interface PedidoRequest {
    id: number;
    valor_total: string;
    nome_cliente: string;
    cidade_cliente: string;
    endereco_cliente: string;
    telefone_cliente: string;
    id_restaurante: number;
}

class UpdatePedidoService {
    async execute({id, valor_total, nome_cliente, cidade_cliente, endereco_cliente, telefone_cliente, id_restaurante}: PedidoRequest) {
        const pedido = await prismaClient.pedido.update({
            where: {
                id: Number(id)
            },
            data: {
                valor_total: valor_total,
                nome_cliente: nome_cliente,
                cidade_cliente: cidade_cliente,
                endereco_cliente: endereco_cliente,
                telefone_cliente: telefone_cliente,
                id_restaurante: id_restaurante
            },
        });

        return pedido;
    }
}

export { UpdatePedidoService };
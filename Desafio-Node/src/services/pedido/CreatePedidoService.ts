//imports
import prismaClient from "../../prisma";

//Interfaces
interface PedidoRequest {
    valor_total: string;
    nome_cliente: string;
    cidade_cliente: string;
    endereco_cliente: string;
    telefone_cliente: string;
    id_restaurante: number;
}

class CreatePedidoService {
    async execute({valor_total, nome_cliente, cidade_cliente, endereco_cliente, telefone_cliente, id_restaurante}: PedidoRequest) {
        const pedido = await prismaClient.pedido.create({
            data: {
                valor_total: valor_total,
                nome_cliente: nome_cliente,
                cidade_cliente: cidade_cliente,
                endereco_cliente: endereco_cliente,
                telefone_cliente: telefone_cliente,
                id_restaurante: id_restaurante
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

        return pedido;
    }
}

export { CreatePedidoService };
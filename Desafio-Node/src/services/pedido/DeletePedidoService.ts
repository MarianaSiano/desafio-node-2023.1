import prismaClient from "../../prisma";

class DeletePedidoService {
    static async deletarRecurso({id}) {
        const resultado = await prismaClient.pedido.delete({
            where: {
                id
            }
        });
        return resultado;
    }
}

export { DeletePedidoService };
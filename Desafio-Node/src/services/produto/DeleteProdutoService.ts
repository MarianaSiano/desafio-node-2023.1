import prismaClient from "../../prisma";

class DeleteProdutoService {
    static async deletarRecurso({id}) {
        const resultado = await prismaClient.produto.delete({
            where: {
                id
            }
        });
        return resultado;
    }
}

export { DeleteProdutoService };
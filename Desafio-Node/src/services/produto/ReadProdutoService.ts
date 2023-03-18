import prismaClient from "../../prisma";

class ReadProdutoService {
    async execute(produto_id: string) {
        const produto = await prismaClient.produto.findFirst({
            where: {
                id: parseInt(produto_id)
            },
            select: {
                id: true,
                nome: true,
                descricao: true,
                preco: true,
                categoria: true
            }
        });
    }
}

export { ReadProdutoService };
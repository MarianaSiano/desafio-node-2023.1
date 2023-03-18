import prismaClient from "../../prisma";

interface ProdutoRequest {
    id: number;
    nome: string;
    descricao: string;
    quantidade: number;
    preco: string;
    categoria: string;
    id_restaurante: number;
}

class ReadProdutoService {
    async execute({ id }: ProdutoRequest) {
        const produto = await prismaClient.produto.findUnique({
            where: {
                id: id
            },
            select: {
                id: true,
                nome: true,
                descricao: true,
                quantidade: true,
                preco: true,
                categoria: true,
                id_restaurante: true
            }
        });

        return { produto };
    }
}

export { ReadProdutoService };
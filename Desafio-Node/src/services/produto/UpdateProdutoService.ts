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

class UpdateProdutoService {
    async execute({id, nome, descricao, quantidade, preco, categoria, id_restaurante}: ProdutoRequest) {
        const produto = await prismaClient.produto.update({
            where: {
                id: Number(id)
            },
            data: {
                nome: nome,
                descricao: descricao,
                quantidade: quantidade,
                preco: preco,
                categoria: categoria,
                id_restaurante: id_restaurante
            },
        });

        return produto;
    }
}

export { UpdateProdutoService };
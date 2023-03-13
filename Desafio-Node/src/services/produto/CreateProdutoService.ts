//imports
import prismaClient from "../../prisma";

//Interfaces
interface ProdutoRequest {
    nome: string;
    descricao: string;
    quantidade: number;
    preco: string;
    categoria: string;
    id_restaurante: number;
}

class CreateProdutoService {
    async execute({nome, descricao, quantidade, preco, categoria, id_restaurante}: ProdutoRequest) {
        const produto = await prismaClient.produto.create({
            data: {
                nome: nome,
                descricao: descricao,
                quantidade: quantidade,
                preco: preco,
                categoria: categoria,
                id_restaurante: id_restaurante
            }
        });

        return produto;
    }
}

export { CreateProdutoService };
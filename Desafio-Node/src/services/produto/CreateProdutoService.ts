//imports
import prismaClient from "../../prisma";

//Interfaces
interface ProdutoRequest {
    nome: string;
    descricao: string;
    quantidade: number;
    preco: string;
    categoria: string;
    restaurante_id: number;
}

class CreateProdutoService {
    async execute() {}
}

export { CreateProdutoService };
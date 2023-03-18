import { Request, Response } from 'express';
import prismaClient from '../../prisma';

interface ProdutoRequest {
    id: number;
    nome: string;
    descricao: string;
    quantidade: number;
    preco: string;
    categoria: string;
    id_restaurante: number;
}

class ReadProdutoController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const produto = await prismaClient.produto.findFirst({
            where: {
                id: Number(id)
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

        if(!produto) {
            return res.status(404).json({error: "Produto não encontrado"});
        }

        const produtoResponse = {
            id: produto.id,
            nome: produto.nome,
            descricao: produto.descricao,
            quantidade: produto.quantidade,
            preco: produto.preco,
            categoria: produto.categoria,
            id_restaurante: produto.id_restaurante
        }

        return res.json(produtoResponse);
    }
}

export { ReadProdutoController };
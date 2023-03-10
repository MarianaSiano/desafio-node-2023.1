import { Request, Response } from 'express';
import { CreateProdutoService } from '../../services/produto/CreateProdutoService';

class CreateProdutoController {
    async handle(req: Request, res: Response) {
        const { nome, descricao, quantidade, preco, categoria, id_restaurante } = req.body;
        const createProdutoService = new CreateProdutoService();
        const produto = await createProdutoService.execute({ nome, descricao, quantidade, preco, categoria, id_restaurante });

        return res.json(produto);
    }
}

export { CreateProdutoController };
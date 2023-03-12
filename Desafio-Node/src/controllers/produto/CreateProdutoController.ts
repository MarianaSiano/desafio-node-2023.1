import { Request, Response } from 'express';
import { CreateProdutoService } from '../../services/produto/CreateProdutoService';

class CreateProdutoController {
    async handle(req: Request, res: Response) {
        const { nome, descricao, quantidade, preco, categoria, restaurante_id } = req.body;
        const createProdutoController = new CreateProdutoService();
        const produto = createProdutoController.execute(req.body);

        return res.json(produto);
    }
}

export { CreateProdutoController };
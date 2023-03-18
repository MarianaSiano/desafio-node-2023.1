import { Request, Response } from 'express';
import { UpdateProdutoService } from '../../services/produto/UpdateProdutoService';

class UpdateProdutoController {
    async handle(req: Request, res: Response) {
        const { id, nome, descricao, quantidade, preco, categoria, id_restaurante } = req.body;
        const updateProdutoService = new UpdateProdutoService();

        const produto = await updateProdutoService.execute({ id, nome, descricao, quantidade, preco, categoria, id_restaurante });

        try {
            produto;
            res.status(200).json({ message: 'Produto atualizado com sucesso!' });
        }catch (err) {
            res.status(400).json({ message: 'Erro ao atualizar produto!' });
        }

        return res.json(produto);
    }
}

export { UpdateProdutoController };
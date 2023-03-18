import { Request, Response } from "express";
import { ReadProdutoService } from "../../services/produto/ReadProdutoService";

class ReadProdutoController {
    async handle(req: Request, res: Response) {
        const produto_id = req.params.id;
        const readProdutoService = new ReadProdutoService();
        const produto = await readProdutoService.execute(produto_id);

        return res.json(produto);
    }
}

export { ReadProdutoController };
import { Request, Response } from 'express';
import { DeleteProdutoService } from '../../services/produto/DeleteProdutoService';

class DeleteProdutoController {
    async handle(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const resultado = await DeleteProdutoService.deletarRecurso({id});

        try{
            if(!resultado) {
                throw new Error("Não foi possível deletar o produto");
            }
        }catch(err) {
            return res.status(400).json({
                message: err.message
            })
        }

        res.send(resultado)
    }
}

export { DeleteProdutoController };
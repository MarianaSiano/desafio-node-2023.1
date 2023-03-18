import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

class ReadAllProdutosController {
    async handle(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const produtos = await prisma.produto.findMany();
        res.json(produtos);
    }
}

export { ReadAllProdutosController };
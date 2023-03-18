import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

class ReadAllPedidosController{
    async handle(req: Request, res: Response){
        const prisma = new PrismaClient()
        const pedidos = await prisma.pedido.findMany()
        res.json(pedidos)
    }
}

export { ReadAllPedidosController }
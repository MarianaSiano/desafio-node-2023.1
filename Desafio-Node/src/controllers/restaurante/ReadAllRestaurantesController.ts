import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

class ReadAllRestaurantesController {
    async handle(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const restaurantes = await prisma.restaurante.findMany();
        res.json(restaurantes);
    }
}

export { ReadAllRestaurantesController };
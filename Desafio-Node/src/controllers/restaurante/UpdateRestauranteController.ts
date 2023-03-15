import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

class UpdateRestauranteController {
    async handle(req: Request, res: Response) {
        const prisma = new PrismaClient();
    }
}

export { UpdateRestauranteController };
import prismaClient from "../../prisma";

class DetailRestauranteService {
    async execute() {
        return { ok: true };
    }
}

export { DetailRestauranteService };
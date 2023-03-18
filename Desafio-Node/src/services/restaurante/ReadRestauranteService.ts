import prismaClient from "../../prisma";

class ReadRestauranteService {
    async execute(id: number) {
        const restaurante = await prismaClient.restaurante.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                nome: true,
                email: true,
                categoria: true,
                cidade: true,
                endereco: true,
                telefone: true
            }
        });
        return { restaurante };
    }
}

export { ReadRestauranteService };
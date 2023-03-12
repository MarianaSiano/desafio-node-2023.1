import prismaClient from "../../prisma";

class ReadRestauranteService {
    async execute(restaurante_email: string) {
        const restaurante = await prismaClient.restaurante.findFirst({
            where: {
                email: restaurante_email
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
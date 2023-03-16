import prismaClient from "../../prisma";

class DeleteRestauranteService {
    async execute(id: string) {
        const restaurante = await prismaClient.restaurante.delete({
            where: {
                id: parseInt(id)
            }
        });

        if(!restaurante) {
            throw new Error("Restaurante não encontrado");
        }

        await prismaClient.restaurante.delete({
            where: {
                id: parseInt(id)
            }
        });
    }
}

export { DeleteRestauranteService }
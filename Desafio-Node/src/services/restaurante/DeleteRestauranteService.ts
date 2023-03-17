import prismaClient from "../../prisma";
interface RestauranteRequest {
    id: string;
    email: string;
}

class DeleteRestauranteService {
    async execute(id) {
        const restaurante = await prismaClient.restaurante.delete({
            where: {
                id: parseInt(id)
            },
        });

        if(!restaurante) {
            throw new Error("Restaurante não encontrado");
        }

        await prismaClient.restaurante.delete({
            where: {
                id: parseInt(id)
            }
        });

        return restaurante;
    }
}

export { DeleteRestauranteService }
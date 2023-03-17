import prismaClient from "../../prisma";

class DeleteRestauranteService {
    async deletarRestaurante(id) {
        const resultado = await prismaClient.restaurante.delete({
            where: {
                id
            }
        });
        return resultado;
    }
}

export { DeleteRestauranteService };
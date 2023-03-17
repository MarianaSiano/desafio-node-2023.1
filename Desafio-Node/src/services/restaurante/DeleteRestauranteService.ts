import prismaClient from "../../prisma";
class DeleteRestauranteService {
    static async deletarRecurso({id}) {
        const resultado = await prismaClient.restaurante.delete({
            where: {
                id
            }
        });
        return resultado;
    }
}

export { DeleteRestauranteService };
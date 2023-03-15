import prismaClient from "../../prisma";

class UpdateRestauranteService {
    async execute(restaurante_id: string, restaurante_nome: string, restaurante_email: string, restaurante_categoria: string, restaurante_cidade: string, restaurante_endereco: string, restaurante_telefone: string) {
    }
}

export { UpdateRestauranteService };
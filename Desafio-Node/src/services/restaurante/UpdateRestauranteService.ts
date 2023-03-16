
import prismaClient from "../../prisma";
class UpdateRestauranteService {
    async execute(id, nome, email, senha, categoria, cidade, endereco, telefone) {
        const restauranteUpdate = await prismaClient.restaurante.update({
            where: {
                id: id
            },
            data: {
                nome, 
                email, 
                senha, 
                categoria, 
                cidade, 
                endereco, 
                telefone
            }
        })
    }
}

export { UpdateRestauranteService   }
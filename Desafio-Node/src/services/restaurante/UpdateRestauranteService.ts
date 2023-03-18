import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface RestauranteRequest {
    id: number;
    nome: string;
    email: string;
    senha: string;
    categoria: string;
    cidade: string;
    endereco: string;
    telefone: string;
}

class UpdateRestauranteService {
    async execute({id, nome, email, senha, categoria, cidade, endereco, telefone}: RestauranteRequest) {
        const senhaHash = await hash(senha, 8);

        const restaurante = await prismaClient.restaurante.update({
            where: {
                id: Number(id)
            },
            data: {
                nome: nome,
                email: email,
                senha: senhaHash,
                categoria: categoria,
                cidade: cidade,
                endereco: endereco,
                telefone: telefone
            },
        });

        return restaurante;
    }
}

export { UpdateRestauranteService };
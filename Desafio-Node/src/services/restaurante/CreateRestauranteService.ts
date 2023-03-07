import prismaClient from "../../prisma";

interface RestauranteRequest {
    nome: string;
    email: string;
    senha: string;
    categoria: string;
    cidade: string;
    endereco: string;
    telefone: string;
}

class CreateRestauranteService {
    async execute({nome, email, senha, categoria, cidade, endereco, telefone}: RestauranteRequest) {
        //Verificar se mandou o email
        if(!email) {
            throw new Error("Email incorreto");
        }

        //verificar se esse email já está cadastrado na plataforma
        const restauranteAlreadyExists = await prismaClient.restaurante.findFirst({
            where: {
                email: email
            }
        });

        if(restauranteAlreadyExists) {
            throw new Error("Restaurante já cadastrado");
        }

        const restaurante = await prismaClient.restaurante.create({
            data: {
                nome: nome,
                email: email,
                senha: senha,
                categoria: categoria,
                cidade: cidade,
                endereco: endereco,
                telefone: telefone
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

        return restaurante;
    }
}

export { CreateRestauranteService }
import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

//Interface
interface AuthRequest {
    email: string;
    senha: string;
}

class AuthRestauranteService {
    async execute({ email, senha }: AuthRequest) {
        //Verificar se o email existe
        const restaurante = await prismaClient.restaurante.findFirst({
            where: {
                email: email
            }
        });

        if(!restaurante) {
            throw new Error("Email ou senha incorretos");
        }

        //Verificar se a senha está correta
        const senhaMatch = await compare(senha, restaurante.senha);

        if(!senhaMatch) {
            throw new Error("Email ou senha incorretos");
        }

        return { ok: true }
    }
}

export { AuthRestauranteService };
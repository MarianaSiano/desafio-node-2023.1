//imports
import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { parseArgs } from "util";

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

        //Gerar o token JWT e devolver para o usuário
        const token = sign({
            name: restaurante.id,
            email: restaurante.email
        },
        process.env.JWT_SECRET,
        {
            subject: restaurante.email, //Subject causando erro com restaurante.id pelo id ser int e não uma string
            expiresIn: '15d'
        },
        
        )

        return { 
        id: restaurante.id,
        nome: restaurante.nome,
        email: restaurante.email,
        token: token
        }
    }
}

export { AuthRestauranteService };
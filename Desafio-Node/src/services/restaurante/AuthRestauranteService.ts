import prismaClient from "../../prisma";

//Interface
interface AuthRequest {
    email: string;
    senha: string;
}

class AuthRestauranteService {
    async execute() {
    }
}

export { AuthRestauranteService };
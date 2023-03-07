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
        console.log(nome);
        return {nome: nome};
    }
}

export { CreateRestauranteService }
import { Router } from "express";

//Controllers
import { CreateRestauranteController } from "./controllers/restaurante/CreateRestauranteController"; //Controller criar Restaurante
import { AuthRestauranteController } from "./controllers/restaurante/AuthRestauranteController"; //Controller autenticar Restaurante
import { ReadRestauranteController } from "./controllers/restaurante/ReadRestauranteController"; //Controller ler Restaurante
import { ReadAllRestaurantesController } from "./controllers/restaurante/ReadAllRestaurantesController"; //Controller ler todos os Restaurantes
import { CreateProdutoController } from "./controllers/produto/CreateProdutoController"; //Controller criar Produto

//Middlewares
import { isAuthenticated } from "./middlewares/isAuthenticated"; //Autenticação

const router = Router();

//post
//Restaurante
router.post("/createResturante", new CreateRestauranteController().handle); //Rota de Criar Restaurante
router.post("/login", new AuthRestauranteController().handle); //Rota de Login Restaurante

//Produto
router.post("/createProduto", isAuthenticated, new CreateProdutoController().handle); //Rota de Criar Produto

//get
router.get("/detalhes", isAuthenticated, new ReadRestauranteController().handle); //Rota de ler um Restaurante enquanto está logado
router.get("/restaurantes", isAuthenticated, new ReadAllRestaurantesController().handle); //Rota de ler um Restaurante enquanto está logado

export { router };
import { Router } from "express";

//Controllers
//Restaurante
import { CreateRestauranteController } from "./controllers/restaurante/CreateRestauranteController"; //Controller criar Restaurante
import { AuthRestauranteController } from "./controllers/restaurante/AuthRestauranteController"; //Controller autenticar Restaurante
import { ReadRestauranteController } from "./controllers/restaurante/ReadRestauranteController"; //Controller visualizar Restaurante
import { ReadAllRestaurantesController } from "./controllers/restaurante/ReadAllRestaurantesController"; //Controller visualizar todos os Restaurantes
import { UpdateRestauranteController } from "./controllers/restaurante/UpdateRestauranteController"; //Controller atualizar Restaurante
import { DeleteRestauranteController } from "./controllers/restaurante/DeleteRestauranteController"; //Controller deletar Restaurante

//Produto
import { CreateProdutoController } from "./controllers/produto/CreateProdutoController"; //Controller criar Produto
import { ReadProdutoController } from "./controllers/produto/ReadProdutoController"; //Controller visualizar Produto
import { ReadAllProdutosController } from "./controllers/produto/ReadAllProdutosController"; //Controller visualizar todos os Produtos
import { UpdateProdutoController } from "./controllers/produto/UpdateProdutoController"; //Controller atualizar Produto
import { DeleteProdutoController } from "./controllers/produto/DeleteProdutoController"; //Controller deletar Produto

//Middlewares
import { isAuthenticated } from "./middlewares/isAuthenticated"; //Autenticação

const router = Router();

//post
//Restaurante
router.post("/createRestaurante", new CreateRestauranteController().handle); //Rota de Criar Restaurante
router.post("/login", new AuthRestauranteController().handle); //Rota de Login Restaurante

//Produto
router.post("/createProduto", isAuthenticated, new CreateProdutoController().handle); //Rota de Criar Produto

//get
//Restaurante
router.get("/detalheRestaurante", isAuthenticated, new ReadRestauranteController().handle); //Rota de visualizar um Restaurante enquanto está logado
router.get("/restaurantes", new ReadAllRestaurantesController().handle); //Rota de visualizar todos os resstaurante, não precisa estar logado

//Produto
router.get("/detalheProduto/:id", new ReadProdutoController().handle); //Rota de visualizar um produto
router.get("/produtos", new ReadAllProdutosController().handle); //Rota de visualizar todos os produtos

//put
//Restaurante
router.put("/updateRestaurante/:id", isAuthenticated, new UpdateRestauranteController().handle); //Rota de atualizar Restaurante

//Produto
router.put("/updateProduto/:id", isAuthenticated, new UpdateProdutoController().handle); //Rota de atualizar Produto

//delete
//Restaurante
router.delete("/deletarRestaurante/:id", isAuthenticated, new DeleteRestauranteController().handle); //Rota de deletar Restaurante

//Produto
router.delete("/deletarProduto/:id", isAuthenticated, new DeleteProdutoController().handle); //Rota de deletar Produto

export { router };
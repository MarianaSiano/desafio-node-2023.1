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

//Pedido
import { CreatePedidoController } from "./controllers/pedido/CreatePedidoController"; //Controller criar Pedido
import { ReadPedidosController } from "./controllers/pedido/ReadPedidoController"; //Controller visualizar Pedido
import { ReadAllPedidosController } from "./controllers/pedido/ReadAllPedidosController"; //Controller visualizar todos os Pedidos
import { UpdatePedidoController } from "./controllers/pedido/UpdatePedidoController"; //Controller atualizar Pedido
import { DeletePedidoController } from "./controllers/pedido/DeletePedidoController"; //Controller deletar Pedido

//Middlewares
import { isAuthenticated } from "./middlewares/isAuthenticated"; //Autenticação

const router = Router();

//post
//Restaurante
router.post("/restaurante/create", new CreateRestauranteController().handle); //Rota de Criar Restaurante
router.post("/login", new AuthRestauranteController().handle); //Rota de Login Restaurante

//Produto
router.post("/produto/create", isAuthenticated, new CreateProdutoController().handle); //Rota de Criar Produto

//Pedido
router.post("/pedido/create", isAuthenticated, new CreatePedidoController().handle); //Rota de Criar Pedido

//get
//Restaurante
router.get("/detalheRestaurante/:id", isAuthenticated, new ReadRestauranteController().handle); //Rota de visualizar um Restaurante enquanto está logado
router.get("/restaurantes", new ReadAllRestaurantesController().handle); //Rota de visualizar todos os resstaurante, não precisa estar logado

//Produto
router.get("/detalheProduto/:id", new ReadProdutoController().handle); //Rota de visualizar um produto
router.get("/produtos", new ReadAllProdutosController().handle); //Rota de visualizar todos os produtos

//Pedido
router.get("/detalhePedido/:id", isAuthenticated, new ReadPedidosController().handle); //Rota de visualizar um pedido
router.get("/pedidos", isAuthenticated, new ReadAllPedidosController().handle); //Rota de visualizar todos os pedidos

//put
//Restaurante
router.put("/updateRestaurante/:id", isAuthenticated, new UpdateRestauranteController().handle); //Rota de atualizar Restaurante

//Produto
router.put("/updateProduto/:id", isAuthenticated, new UpdateProdutoController().handle); //Rota de atualizar Produto

//Pedido
router.put("/updatePedido/:id", isAuthenticated, new UpdatePedidoController().handle); //Rota de atualizar Pedido

//delete
//Restaurante
router.delete("/deletarRestaurante/:id", isAuthenticated, new DeleteRestauranteController().handle); //Rota de deletar Restaurante

//Produto
router.delete("/deletarProduto/:id", isAuthenticated, new DeleteProdutoController().handle); //Rota de deletar Produto

//Pedido
router.delete("/deletarPedido/:id", isAuthenticated, new DeletePedidoController().handle); //Rota de deletar Pedido

export { router };
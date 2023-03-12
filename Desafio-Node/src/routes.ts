import { Router } from "express";

//Controllers
import { CreateRestauranteController } from "./controllers/restaurante/CreateRestauranteController"; //Controller Restaurante
import { AuthRestauranteController } from "./controllers/restaurante/AuthRestauranteController"; //Controller Restaurante
import { ReadRestauranteController } from "./controllers/restaurante/ReadRestauranteController"; //Controller Restaurante

//Middlewares
import { isAuthenticated } from "./middlewares/isAuthenticated"; //Autenticação

const router = Router();

//post
router.post("/create", new CreateRestauranteController().handle); //Rota de Criar Restaurante
router.post("/login", new AuthRestauranteController().handle); //Rota de Login Restaurante

//get
router.get("/detalhes", isAuthenticated, new ReadRestauranteController().handle); //Rota Restaurante

export { router };
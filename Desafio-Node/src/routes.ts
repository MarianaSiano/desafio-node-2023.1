import { Router } from "express";

//Controllers
import { CreateRestauranteController } from "./controllers/restaurante/CreateRestauranteController"; //Controller Restaurante
import { AuthRestauranteController } from "./controllers/restaurante/AuthRestauranteController"; //Controller Restaurante
import { DetailRestauranteController } from "./controllers/restaurante/DetailRestauranteController"; //Controller Restaurante

const router = Router();

//post
router.post("/restaurantes", new CreateRestauranteController().handle); //Rota Restaurante
router.post("/session", new AuthRestauranteController().handle); //Rota Restaurante

//get
router.get("/detalhes", new DetailRestauranteController().handle); //Rota Restaurante

export { router };
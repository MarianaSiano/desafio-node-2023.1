import { Router } from "express";

//Controllers
import { CreateRestauranteController } from "./controllers/restaurante/CreateRestauranteController";

const router = Router();

//Rota Restaurante
router.post("/restaurantes", new CreateRestauranteController().handle);

export { router };
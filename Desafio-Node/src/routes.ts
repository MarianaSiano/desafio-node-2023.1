import { Router } from "express";

//Controllers
import { CreateRestauranteController } from "./controllers/restaurante/CreateRestauranteController";
import { AuthRestauranteController } from "./controllers/restaurante/AuthRestauranteController";

const router = Router();

//Rota Restaurante
router.post("/restaurantes", new CreateRestauranteController().handle);
router.post("/session", new AuthRestauranteController().handle);

export { router };
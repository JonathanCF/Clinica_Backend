import { Router, Request, Response } from "express";

import { CreateProdutoControllers } from "./controllers/produtos/CreateProdutoControllers";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { DetailUserController } from "./controllers/users/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

// -- ROTAS USER --
router.post("/user", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

// -- ROTAS PRODUTOS --
router.post("/produtos", new CreateProdutoControllers().handle);

export { router };

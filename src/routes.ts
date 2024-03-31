import { Router, Request, Response } from "express";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreateProdutoControllers } from "./controllers/produtos/CreateProdutoControllers";
import { FindAllProdutosController } from "./controllers/produtos/FindAllProdutosController";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { DetailUserController } from "./controllers/users/DetailUserController";

const router = Router();

// -- ROTAS USER --
router.post("/user", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

// -- ROTAS PRODUTOS --
router.post("/produtos", new CreateProdutoControllers().handle);
router.get("/allprodutos", new FindAllProdutosController().handle);

export { router };

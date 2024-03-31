import { Request, Response, response } from "express";
import { CreateProdutoService } from "../../services/produtos/CreateProdutoService";

class CreateProdutoControllers {
  async handle(req: Request, res: Response) {
    const { nome_produto, unidade, quantidade, estoque_min } = req.body;

    const createProdutoSerive = new CreateProdutoService();

    const produto = await createProdutoSerive.execute({
      nome_produto,
      unidade,
      quantidade,
      estoque_min,
    });

    return res.json(produto);
  }
}

export { CreateProdutoControllers };

import { Request, Response } from "express";
import { FindAllProdutosService } from "../../services/produtos/FindAllProdutosService";

class FindAllProdutosController {
  async handle(req: Request, res: Response) {
    const findallProdutos = new FindAllProdutosService();

    const AllProdutos = await findallProdutos.execute();

    return res.json(AllProdutos);
  }
}

export { FindAllProdutosController };

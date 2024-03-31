import prismaClient from "../../prsima";

class FindAllProdutosService {
  async execute() {
    const allProdutos = await prismaClient.produto.findMany();

    return allProdutos;
  }
}

export { FindAllProdutosService };

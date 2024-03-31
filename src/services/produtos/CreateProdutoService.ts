import prismaClient from "../../prsima";

interface ProductRequest {
  nome_produto: string;
  unidade: string;
  quantidade: number;
  estoque_min: number;
}

class CreateProdutoService {
  async execute({
    nome_produto,
    unidade,
    quantidade,
    estoque_min,
  }: ProductRequest) {
    //verificar se informou o nome unidade e quantidade
    if (!nome_produto && !unidade && !quantidade) {
      throw new Error("Favor informar o campos obrigátorios!!");
    }

    const createProduto = await prismaClient.produto.create({
      data: {
        nome_produto,
        unidade,
        quantidade,
        estoque_min,
      },
    });

    return { createProduto };
  }
}

export { CreateProdutoService };

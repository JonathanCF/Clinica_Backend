import prismaClient from "../../prsima";

class FindAllProdutosService {
  async execute() {
    try {
      // Limpar os prepared statements existentes
      await prismaClient.$executeRaw`DEALLOCATE ALL`;

      // Executar a consulta para encontrar todos os produtos
      const allProdutos = await prismaClient.produto.findMany();

      return allProdutos;
    } catch (error) {
      // Lidar com erros de forma apropriada
      throw new Error(`Erro ao buscar produtos: ${error.message}`);
    }
  }
}

export { FindAllProdutosService };

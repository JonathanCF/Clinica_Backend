import prismaClient from "../../prsima";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    try {
      //Verificar se email existe
      const user = await prismaClient.user.findUnique({
        where: {
          email: email,
        },
      });

      if (!user) {
        throw new Error("Usuário não encontrado");
      }

      //verificar se a senha está correta
      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) {
        throw new Error("Senha incorreta");
      }

      //gerar um token JWT e devolver os dados do usuário como id, email, name
      const token = sign(
        {
          name: user.name,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          subject: user.id,
          expiresIn: "30d",
        }
      );

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        token: token,
      };
    } catch (error) {
      // Trate o erro de forma apropriada
      if (
        error.message === "Usuário não encontrado" ||
        error.message === "Senha incorreta"
      ) {
        // Caso seja erro de usuário/senha incorretos
        throw new Error("Usuário ou senha incorretos");
      } else {
        // Para outros erros não esperados, apenas relançamos o erro original
        throw error;
      }
    }
  }
}

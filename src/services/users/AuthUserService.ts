import prismaClient from "../../prsima";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    //Verificar se email existe
    const user = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("Usuário/senha incorreto!!");
    }
    //verificar se a senha esta correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Usuário/senha incorreto!!");
    }

    //gerar um token JWT e devolver os dados do usuario como id, email, name

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
  }
}

export { AuthUserService };

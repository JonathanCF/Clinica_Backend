import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // receber o token
  const authToken = req.headers.authorization;

  //verificar se recebeu o token
  if (!authToken) {
    return res.status(401).end();
  }

  // retirar o Bearer do Token
  const [, token] = authToken.split(" ");

  try {
    //Validar o token
    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

    // recuperar o id do token e colocar dento de uma variavel dentro do request
    // tipagem em @types/express/index.d.ts
    // tsconfig.json ""typeRoots": [".src/@types"]"
    req.user_id = sub;

    return next();
  } catch (error) {
    return res.status(401).end();
  }
}

import { Request, Response } from "express";
import { AuthUserService } from "../../services/users/AuthUserService";

class AuthUserController {
  async handle(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const authUserService = new AuthUserService();

      const auth = await authUserService.execute({
        email,
        password,
      });

      return res.json(auth);
    } catch (error) {
      // Trate o erro de forma apropriada
      return res.status(500).json({ error: error.message });
    }
  }
}

export { AuthUserController };

import prismaClient from "../../prsima";

class DetailUserService {
  async execute(user_id: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      select: {
        name: true,
        id: true,
        email: true,
      },
    });

    return user;
  }
}

export { DetailUserService };

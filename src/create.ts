import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  const createUser = await prisma.user.create({
    data: {
      name: "Shahin",
      email: "shahin@gmail.com",
      password: "123456",
    },
  });

  console.log(createUser);
};

main();

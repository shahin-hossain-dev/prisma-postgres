import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  //******** find multiple items ********//
  // const findMovies = await prisma.movie.findMany();

  // console.log(findMovies);

  //********* find unique item **********//

  // model e define kora unique property find korar jonno findUnique use kora hoy. jemon id, email etc.
  const findUnique = await prisma.user.findUnique({
    where: { id: "dc15e456-0d6e-498c-85e4-e2aeeabe8017" },
    // user er moddhe include kore watchLists paoa jasse karon. user and movies er moddhe many to many relation ace.
    include: {
      watchLists: true,
    },
  });

  //********* find first item **********//

  // matched items theke first items get korar jonno findFirst use kora hoy
  const findFirst = await prisma.user.findFirst({
    where: {
      password: "123456",
    },
    include: {
      watchLists: true,
    },
  });

  // console.log(findFirst);

  //********* find unique item or error **********//

  //findUniqueOrError method diye jodi item exist hoy tahole data dibe otherwise error throw korbe

  const findUniqueOrErrorData = await prisma.user.findUniqueOrThrow({
    where: {
      email: "akbar-as@gmail.com",
    },
    include: {
      watchLists: true,
    },
  });

  //find user age less than 18

  const findUser = await prisma.user.findMany({
    where: {
      age: { gt: "21" },
    },
  });
};

main();

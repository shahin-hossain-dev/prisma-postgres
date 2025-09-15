import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  const findMovies = await prisma.movie.findMany();

  console.log(findMovies);
};

main();

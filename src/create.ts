import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // create single user
  // const createUser = await prisma.user.create({
  //   data: {
  //     name: "Shahin",
  //     email: "shahin2@gmail.com",
  //     password: "123456",
  //   },
  // });

  // const createMultipleMovie = await prisma.movie.createMany({
  //   data: [
  //     {
  //       name: "Inception",
  //       rating: "8.8",
  //       genre: "Sci-Fi",
  //       director: "Hablu",
  //       releaseDate: "2010-07-16T00:00:00.000Z",
  //     },
  //     {
  //       name: "The Dark Knight",
  //       rating: "9.0",
  //       genre: "Action",
  //       director: "Dablu",
  //       releaseDate: "2008-07-18T00:00:00.000Z",
  //     },
  //     {
  //       name: "Interstellar",
  //       rating: "8.6",
  //       director: "Khablu",
  //       genre: "Adventure",
  //       releaseDate: "2014-11-07T00:00:00.000Z",
  //     },
  //   ],
  // });

  //* create user connect watchList

  const createUser = await prisma.user.create({
    data: {
      name: "Akbar",
      email: "akbar-as@gmail.com",
      password: "123456",
      watchLists: {
        connect: [{ id: "6dc81482-37ff-44bb-8c9b-cb95697138e1" }],
      },
    },
    include: {
      watchLists: true,
    },
  });

  console.log(createUser);
};

main();

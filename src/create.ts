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

  // console.log(createMultipleMovie);

  //* create user connect watchList

  /* const createUser = await prisma.user.create({
    data: {
      name: "Hossain",
      email: "hossain@gmail.com",
      password: "123456",
      age: "20",
      district: "Dhaka",
      photoURL: "https://photo.com",
      watchLists: {
        connect: [{ id: "01c20f41-789e-4890-a370-905beb8c6619" }],
      },
    },
    include: {
      watchLists: true,
    },
  });
 */

  //* create review

  const createReview = await prisma.review.create({
    data: {
      comment: "Awesome Movie",
      movieId: "01c20f41-789e-4890-a370-905beb8c6619",
      userId: "36d474fd-e182-4112-90f3-7c7c7bc9f2bc",
    },
    include: {
      user: true,
      movie: true,
    },
  });

  console.log(createReview);
};

main();

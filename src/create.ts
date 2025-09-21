import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // * create single user
  // const createUser = await prisma.user.create({
  //   data: {
  //     name: "Hossain",
  //     email: "Hossain@gmail.com",
  //     password: "123456",
  //     age: "20",
  //     district: "Dhaka",
  //   },
  // });
  // * create multiple movie
  // const createMultipleMovie = await prisma.movie.createMany({
  //   data: [
  //     {
  //       name: "Inception",
  //       genre: "Sci-Fi",
  //       director: "Hablu",
  //       releaseDate: "2010-07-16T00:00:00.000Z",
  //     },
  //     {
  //       name: "The Dark Knight",
  //       genre: "Action",
  //       director: "Dablu",
  //       releaseDate: "2008-07-18T00:00:00.000Z",
  //     },
  //     {
  //       name: "Interstellar",
  //       director: "Khablu",
  //       genre: "Adventure",
  //       releaseDate: "2014-11-07T00:00:00.000Z",
  //     },
  //   ],
  // });
  // console.log(createMultipleMovie);
  //* create user connect watchList
  // * Create user
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
  /* const createReview = await prisma.review.create({
    data: {
      comment: "Awesome Movie",
      movieId: "84d97298-e3ab-499d-8f48-ebe7d5a4fffa",
      userId: "e2dd65c6-7668-49e6-9a24-a4b724101011",
      rating: 4,
    },
    include: {
      user: true,
      movie: true,
    },
  });

  console.log(createReview); */
  //* create single movie
  // const createSingleMovie = await prisma.movie.create({
  //   data: {
  //     name: "Big Hero 6",
  //     genre: "Sci-Fi",
  //     rating: "5",
  //     releaseDate: "2010-07-16T00:00:00.000Z",
  //     director: "Unknown",
  //   },
  // });
  // console.log(createSingleMovie);
};

main();

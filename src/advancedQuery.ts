import { prisma } from "./utils/prismaClient";

// ! 1) Find all movies in the "Sci-Fi" genre released before 2015

//! 2) Find users who have both reviewed a movie AND have movies in their watchList

//! 3) Find reviews with ratings between 3 and 4 stars

//! 4) Get the 3 most recently released movies

//! 5)  Get top 3 movies with highest average ratings

const advancedQuery = async () => {
  const getAll = await prisma.movie.findMany({
    //normal query

    // where: {
    //   genre: "Sci-Fi",
    //   releaseDate: {
    //     lt: new Date("2009-07-16"),
    //   },
    // },

    // advanced query
    where: {
      AND: [
        { releaseDate: { lt: new Date("2015-07-16") } },
        { genre: "Sci-Fi" },
      ],
    },
  });

  // const getMovieRatingWise = await prisma.movie.findMany({
  //   where: {
  //     rating: {
  //       lte: "9",
  //       gte: "6",
  //     },
  //   },
  // });

  // const getRecentMovies = await prisma.movie.findMany({
  //   orderBy: {
  //     releaseDate: "desc",
  //   },
  //   take: 2,
  // });

  // task 2

  const getReviewUsers = await prisma.user.findMany({
    where: {
      reviews: { some: {} },
      watchLists: { some: {} },
    },
    include: {
      reviews: true,
      watchLists: true,
    },
  });

  //task five

  const movieRatings = await prisma.review.groupBy({
    by: ["movieId"],
    _avg: {
      rating: true,
    },
    orderBy: {
      _avg: { rating: "desc" },
    },
    take: 2,
  });

  const movieIdes = movieRatings.map((item) => item.movieId);

  const movies = await prisma.movie.findMany({
    where: {
      id: {
        in: movieIdes,
      },
    },
  });

  // console.log(movies);
};

advancedQuery();

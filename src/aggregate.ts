import { prisma } from "./utils/prismaClient";

// ! Tasks ....

//? 1:  Retrive How much review Exist. and give total reviews by each movie
//? 2:  Retrive Each Movie Avg rating.
//? 3: Which movie have how much rating sum.
//? 4:  who gives min rating. which movie have max rating.
//? 5:  top 2 avg rating movie.
//? 6:  give which movies avg rating is greater than 4

const aggregate = async () => {
  // * Task 1
  const getAllReviewCount = await prisma.review.aggregate({
    _count: {
      id: true,
    },
  });
  const countReview = await prisma.review.count(); //short cut

  const getAllReviewEachMovie = await prisma.review.groupBy({
    by: ["movieId"],
    _count: {
      id: true,
    },
  });
  //   * Task 2
  const eachMovieRating = await prisma.review.groupBy({
    by: ["movieId"],
    _avg: {
      rating: true,
    },
  });

  //   * Task 3

  const movieRatingSum = await prisma.review.groupBy({
    by: ["movieId"],
    _sum: {
      rating: true,
    },
  });

  //   * Task 4

  const minRating = await prisma.review.groupBy({
    by: ["userId"],
    _min: {
      rating: true,
    },
    orderBy: {
      _min: {
        rating: "asc",
      },
    },
    take: 1,
  });

  const movieMaxRating = await prisma.review.groupBy({
    by: ["movieId"],
    _max: {
      rating: true,
    },
    orderBy: {
      _max: {
        rating: "desc",
      },
    },
    take: 1,
  });

  //   * Task 5

  const topRatingMovie = await prisma.review.groupBy({
    by: ["movieId"],
    _avg: {
      rating: true,
    },
    orderBy: {
      _avg: {
        rating: "desc",
      },
    },
    take: 1,
  });

  //   * task 5

  const specificRatingMovie = await prisma.review.groupBy({
    by: ["movieId"],
    _avg: {
      rating: true,
    },
    having: {
      rating: {
        _avg: {
          gt: 4,
        },
      },
    },
  });

  // console.log(specificRatingMovie);
};

aggregate();

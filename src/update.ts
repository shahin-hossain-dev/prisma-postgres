import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const updateFn = async () => {
  const updateUser = await prisma.user.update({
    where: {
      email: "shahin@gmail.com",
    },
    data: {
      age: "17",
      //   district: "Dhaka",
      //   photoURL: "https://photo.com/shahin.jpg",
    },
  });

  const updateMovie = await prisma.movie.update({
    where: {
      id: "b37ef3a9-204d-49b9-ac86-d908b9d4e7ca",
    },
    data: {
      director: "Dablu",
    },
  });
  console.log(updateMovie);
};

updateFn();

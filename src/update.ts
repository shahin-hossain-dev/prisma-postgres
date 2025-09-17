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

  console.log(updateUser);
};

updateFn();

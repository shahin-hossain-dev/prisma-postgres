import { prisma } from "./utils/prismaClient";

const main = async () => {
  // transaction method এর কাজ হলো, এর  ভিতরে যে কয়টি কনডিশন থাকবে সব গুলো operation success হলে document data update/create হবে।
  // এই লজিক গুলোর মধ‍্যে যদি একটি unsuccessful হয় তাহলে সবগুলো লজিক rollback করবে এবং unsuccessful হয়ে যাবে।

  const updateUser = await prisma.$transaction([
    prisma.user.update({
      where: {
        id: "21df55d1-08a0-4908-8c5f-48a57359b0a6",
      },
      data: {
        age: "40",
      },
    }),
    prisma.user.update({
      where: {
        id: "e2dd65c6-7668-49e6-9a24-a4b724101011",
      },
      data: {
        age: "50",
      },
    }),
  ]);

  console.log(updateUser);
};

main();

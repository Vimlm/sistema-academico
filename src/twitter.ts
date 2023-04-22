import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      userName: "Victor Matheus Lucas Martins",
      email: "Victor@email.com"
    },
  });

  console.log("New User created:");
  console.log(newUser);

  const fisrtTweet = await prisma.tweet.create({
    data: {
      text: "Esse é um post criado para testes",
      userId: newUser.id,
    }
  });

  console.log("New Tweet created:");
  console.log(fisrtTweet);

  const newUserWithTweets = await prisma.user.findUnique({
    where: {
      email: "Victor@email.com"
    },
    include: { tweets: true }
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
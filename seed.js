const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");

const prisma = new PrismaClient();

async function main() {
  const usersPath = path.resolve(__dirname, "users.json");
  const usersData = JSON.parse(fs.readFileSync(usersPath, "utf-8"));

  for (const userData of usersData) {
    // Verifique se userData.password é uma string
    if (typeof userData.password !== "string") {
      throw new Error(`Invalid password for user ${userData.email}`);
    }

    const hashedPassword = bcrypt.hashSync(userData.password, 10); // 10 é o número de rounds
    await prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
        title: userData.title,
        srcBI: userData.srcBI,
      },
    });
  }
}

main()
  .then(() => {
    console.log("Users seeded successfully.");
  })
  .catch((error) => {
    console.error("Error seeding users:", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

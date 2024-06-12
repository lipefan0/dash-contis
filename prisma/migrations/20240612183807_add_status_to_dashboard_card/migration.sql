-- CreateTable
CREATE TABLE "DashboardCard" (
    "id" SERIAL NOT NULL,
    "linkBI" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "altImg" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "DashboardCard_pkey" PRIMARY KEY ("id")
);

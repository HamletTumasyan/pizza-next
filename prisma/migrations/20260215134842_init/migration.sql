-- CreateTable
CREATE TABLE "Pizza" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "descr" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "Pizza_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingridient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pizzaId" INTEGER,

    CONSTRAINT "Ingridient_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ingridient" ADD CONSTRAINT "Ingridient_pizzaId_fkey" FOREIGN KEY ("pizzaId") REFERENCES "Pizza"("id") ON DELETE SET NULL ON UPDATE CASCADE;

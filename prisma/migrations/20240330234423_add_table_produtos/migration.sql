-- CreateTable
CREATE TABLE "produtos" (
    "id" TEXT NOT NULL,
    "nome_produto" TEXT NOT NULL,
    "unidade" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "estoque_min" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

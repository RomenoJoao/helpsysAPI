-- CreateTable
CREATE TABLE "Estudante" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "matricula" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "anoCurricular" INTEGER NOT NULL,
    "cursoId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    CONSTRAINT "Estudante_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Coordenador" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Curso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "cordId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    CONSTRAINT "Curso_cordId_fkey" FOREIGN KEY ("cordId") REFERENCES "Coordenador" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Estudo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pressao" TEXT NOT NULL,
    "estresse" TEXT NOT NULL,
    "apoioEmocional" TEXT NOT NULL,
    "apoioFinanceiro" TEXT NOT NULL,
    "dificuldadesFinanceiras" TEXT NOT NULL,
    "distanciaMorada" TEXT NOT NULL,
    "estudanteID" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    CONSTRAINT "Estudo_estudanteID_fkey" FOREIGN KEY ("estudanteID") REFERENCES "Estudante" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Media" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nota" REAL NOT NULL,
    "estudanteID" INTEGER NOT NULL,
    CONSTRAINT "Media_estudanteID_fkey" FOREIGN KEY ("estudanteID") REFERENCES "Estudante" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Curso_cordId_key" ON "Curso"("cordId");

-- CreateIndex
CREATE UNIQUE INDEX "Estudo_estudanteID_key" ON "Estudo"("estudanteID");

-- CreateIndex
CREATE UNIQUE INDEX "Media_estudanteID_key" ON "Media"("estudanteID");

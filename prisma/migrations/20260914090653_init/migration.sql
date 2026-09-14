-- CreateTable
CREATE TABLE "CountryScore" (
    "id" SERIAL NOT NULL,
    "countryName" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "totalScore" DOUBLE PRECISION NOT NULL,
    "economicScore" DOUBLE PRECISION NOT NULL,
    "politicalScore" DOUBLE PRECISION NOT NULL,
    "rating" TEXT NOT NULL,

    CONSTRAINT "CountryScore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BankRatio" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "roa" DOUBLE PRECISION NOT NULL,
    "roe" DOUBLE PRECISION NOT NULL,
    "capitalAdequacy" DOUBLE PRECISION NOT NULL,
    "nplRatio" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "BankRatio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RatingDistribution" (
    "id" SERIAL NOT NULL,
    "rating" TEXT NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "RatingDistribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CountryComparison" (
    "id" SERIAL NOT NULL,
    "dimension" TEXT NOT NULL,
    "TR" DOUBLE PRECISION NOT NULL,
    "US" DOUBLE PRECISION NOT NULL,
    "DE" DOUBLE PRECISION NOT NULL,
    "IN" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "CountryComparison_pkey" PRIMARY KEY ("id")
);

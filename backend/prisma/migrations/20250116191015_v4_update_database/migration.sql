/*
  Warnings:

  - You are about to drop the column `likeCount` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `likeCount` on the `posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "comments" DROP COLUMN "likeCount";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "likeCount";

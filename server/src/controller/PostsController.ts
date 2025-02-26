import { Request, Response } from "express";
import z from "zod";
import { prisma } from "@/database/prisma";
import { AppError } from "@/utils/AppError";

class PostsController {
  async index(req: Request, res: Response) {
    const posts = await prisma.post.findMany({
      where: { status: "PUBLISHED" },
      include: {
        user: {
          select: {
            avatar: true,
            name: true,
            surname: true,
            status: true,
            id: true,
          },
        },
        Like: {
          select: {
            id: true,
            userId: true,
            createdAt: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(posts);
  }

  async create(req: Request, res: Response) {
    const bodySchema = z.object({
      user_id: z.string(),
      content: z.string(),
    });

    const { user_id, content } = bodySchema.parse(req.body);

    const imageUrl = req.file?.path;

    const userExist = await prisma.user.findFirst({ where: { id: user_id } });

    if (!userExist) {
      throw new AppError("User not found.", 404);
    }

    const post = await prisma.post.create({
      data: {
        userId: user_id,
        content,
        imageUrl,
      },
    });

    res.status(201).json(post);
  }
}

export { PostsController };

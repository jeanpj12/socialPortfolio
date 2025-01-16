import { Request, Response } from "express";
import z from "zod";
import { prisma } from "@/database/prisma"
import { AppError } from "@/utils/AppError";

class PostsController {
    async create(req: Request, res: Response) {

        const bodySchema = z.object({
            user_id: z.string(),
            content: z.string(),
            imageUrl: z.string().optional()
        })

        const { user_id, content, imageUrl } = bodySchema.parse(req.body)

        const userExist = await prisma.user.findFirst({ where: { id: user_id } })

        if (!userExist) {
            throw new AppError('User not found.', 404)
        }

        const post = await prisma.post.create({
            data: {
                userId: user_id,
                content,
                imageUrl
            }
        })

        res.status(201).json(post)

    }
}

export { PostsController }
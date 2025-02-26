import { Request, Response } from "express";
import z from "zod";
import { prisma } from "@/database/prisma"
import { AppError } from "@/utils/AppError";

class CommentController {

    async create(req: Request, res: Response) {

        const bodySchema = z.object({
            user_id: z.string(),
            post_id: z.string(),
            comment: z.string().trim(),
        })

        const { user_id, post_id, comment } = bodySchema.parse(req.body)

        const postExist = await prisma.post.findFirst({ where: { id: post_id } })

        if (!postExist) {
            throw new AppError('User not found.', 404)
        }

        const commentContent = await prisma.comments.create({
            data: {
                userId: user_id,
                postId: post_id,
                comment
            }
        })

        res.status(201).json(commentContent)

    }

    async index(req: Request, res: Response) {

        const paramSchema = z.object({
            post_id: z.string()
        })

        const { post_id } = paramSchema.parse(req.params)

        const postExist = await prisma.post.findFirst({ where: { id: post_id } })

        if (!postExist) {
            throw new AppError('Post not found.', 404)
        }

        const commentContent = await prisma.comments.findMany({
            where: {
                postId: post_id
            },
            include: {
                Like: true,
                user: true
            }
        })

        res.status(201).json(commentContent)

    }
}

export { CommentController }
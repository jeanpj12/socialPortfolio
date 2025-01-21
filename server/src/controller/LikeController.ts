import { Request, Response } from "express";
import z from "zod";
import { prisma } from "@/database/prisma"
import { AppError } from "@/utils/AppError";

class LikeController {

    async create(req: Request, res: Response) {

        const bodySchema = z.object({
            userId: z.string(),
            postId: z.string().optional(),
            commentId: z.string().optional(),
        })

        const { userId, postId, commentId } = bodySchema.parse(req.body)

        if (postId) {
            const post = await prisma.post.findUnique({ where: { id: postId } })
            if (!post) throw new AppError('Post not found', 404)
        } else if (commentId) {
            const comment = await prisma.comments.findUnique({ where: { id: commentId } })
            if (!comment) throw new AppError('Comment not found', 404)
        } else {
            throw new AppError('Either postId or commentId must be provided')
        }

        const likeExist = await prisma.likes.findFirst({
            where: {
                userId,
                commentId: commentId || undefined,
                postId: postId || undefined
            }
        })

        if (likeExist) throw new AppError('You already liked this content', 400)

        const like = await prisma.likes.create({
            data: {
                userId,
                postId,
                commentId

            }
        })

        res.status(201).json(like)

    }

    async delete(req: Request, res: Response) {

        const bodySchema = z.object({
            userId: z.string(),
            likeId: z.string(),
        })

        const { likeId, userId } = bodySchema.parse(req.body)

        const likeExist = await prisma.likes.findFirst({
            where: {
                id: likeId,
                userId
            }
        })

        if (!likeExist) throw new AppError('Like not found', 400)

        await prisma.likes.delete({
            where: {
                id: likeId
            }
        })

        res.json({message: 'Like deleted'})

    }
}

export { LikeController }
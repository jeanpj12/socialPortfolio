import { Request, Response } from "express";
import z from "zod";
import path from 'path'
import { AppError } from "@/utils/AppError";
import { prisma } from "@/database/prisma"
import { hash } from 'bcrypt'
import fs from "fs";

class UploadAvatarController {
    async index(req: Request, res: Response) {
        const paramsSchema = z.object({
            filename: z.string()
        })

        const { filename } = paramsSchema.parse(req.params)

        const imagePath = path.join(__dirname, '..', 'uploads', 'avatar', filename)

        if (!fs.existsSync(imagePath)) {
            res.status(404).send({ error: 'File not found' })
            return
        }

        res.sendFile(imagePath, (err) => {
            if (err) {
                res.status(500).send({ error: 'Internal server error' })
            }
        })
    }
}

export { UploadAvatarController }
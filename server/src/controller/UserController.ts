import { Request, Response } from "express";
import z from "zod";
import { AppError } from "@/utils/AppError";
import { prisma } from "@/database/prisma"
import { hash } from 'bcrypt'

class UserController {
    async create(req: Request, res: Response) {

        const bodySchema = z.object({
            name: z.string().min(3).trim(),
            lastName: z.string().min(3).trim(),
            email: z.string().email(),
            password: z.string().min(6).trim(),
            status: z.string()
        })

        const { name, email, password, status, lastName } = bodySchema.parse(req.body)

        const avatar = req.file?.path

        const userWithSameEmail = await prisma.user.findUnique({ where: { email } })

        if (userWithSameEmail) {
            throw new AppError('Email already registere.')
        }

        const hashedPassword = await hash(password, 8)

        const user = await prisma.user.create({
            data: {
                avatar,
                name,
                surname: lastName,
                email,
                password: hashedPassword,
                status
            }
        })

        const { password: _, ...userWithoutPassword } = user

        res.status(201).json(userWithoutPassword)
    }
}

export { UserController }
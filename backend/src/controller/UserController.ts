import { Request, Response } from "express";
import z from "zod";
import { AppError } from "@/utils/AppError";
import { prisma } from "@/database/prisma"
import { hash } from 'bcrypt'

class UserController {
    async create(req: Request, res: Response) {

        const bodySchema = z.object({
            name: z.string().min(3).trim(),
            email: z.string().email(),
            password: z.string().min(6).trim()
        })

        const { name, email, password } = bodySchema.parse(req.body)

        const userWithSameEmail = await prisma.user.findUnique({ where: { email } })

        if (userWithSameEmail) {
            throw new AppError('Email already registere.d')
        }

        const hashedPassword = await hash(password, 8)

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        })

        const { password: _, ...userWithoutPassword } = user

        res.status(201).json(userWithoutPassword)
    }
}

export { UserController }
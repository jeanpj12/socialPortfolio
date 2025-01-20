import { Request, Response } from "express";
import z from "zod";
import { AppError } from "@/utils/AppError";
import { prisma } from "@/database/prisma"
import { compare, hash } from 'bcrypt'
import { authConfig } from "@/configs/auth";
import { sign } from 'jsonwebtoken'

class SessionController {
    async create(req: Request, res: Response) {

        const bodySchema = z.object({
            email: z.string().email(),
            password: z.string().min(6).trim()
        })

        const { email, password } = bodySchema.parse(req.body)

        const user = await prisma.user.findFirst({ where: { email } })

        if (!user) {
            throw new AppError('Invalid email or password')
        }

        const passwordMatched = await compare(password, user.password)

        if (!passwordMatched) {
            throw new AppError('Invalid email or password')
        }

        const { secret, expiresIn } = authConfig.jwt

        const token = sign({ role: user.role ?? 'guest' }, secret, {
            subject: user.id,
            expiresIn
        })

        const { password: hashpassword, ...userWithoutPassword } = user

        res.json({ token, user: userWithoutPassword })
    }
}

export { SessionController }
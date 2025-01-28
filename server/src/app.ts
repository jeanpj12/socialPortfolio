import express, { ErrorRequestHandler } from 'express'
import 'express-async-errors'
import { errorHandling } from '@/middlewares/error-handling'
import { routes } from '@/routes'
import cors from 'cors'
import { env } from '@/env'

const app = express()

app.use(cors({
    origin: env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))
app.options(env.CORS_ORIGIN, cors());
app.use(express.json())
app.use(routes)

app.use(errorHandling)

export { app }
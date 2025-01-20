import express, { ErrorRequestHandler } from 'express'
import 'express-async-errors'
import { errorHandling } from '@/middlewares/error-handling'
import { routes } from '@/routes'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}))

app.use(express.json())
app.use(routes)

app.use(errorHandling)

export { app }
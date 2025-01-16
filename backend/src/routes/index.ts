import { Router } from "express";
import { userRoutes } from "./userRoutes";
import { sessionRoutes } from "./sessionRoutes";

const routes = Router()

routes.use('/user', userRoutes)
routes.use('/session', sessionRoutes)

export { routes }
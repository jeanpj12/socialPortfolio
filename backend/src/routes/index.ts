import { Router } from "express";
import { userRoutes } from "./userRoutes";
import { sessionRoutes } from "./sessionRoutes";
import { postRoutes } from "./postRoutes";
import { commentRoutes } from "./commentRoutes";

const routes = Router()

routes.use('/user', userRoutes)
routes.use('/session', sessionRoutes)
routes.use('/post', postRoutes)
routes.use('/comment', commentRoutes)

export { routes }
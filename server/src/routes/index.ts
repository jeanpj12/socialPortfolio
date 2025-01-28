import { Router } from "express";
import { userRoutes } from "./userRoutes";
import { sessionRoutes } from "./sessionRoutes";
import { postRoutes } from "./postRoutes";
import { commentRoutes } from "./commentRoutes";
import { likeRoutes } from "./likeRoutes";
import { uploadRoutes } from "./uploadRoutes";

const routes = Router()

routes.use('/user', userRoutes)
routes.use('/session', sessionRoutes)
routes.use('/post', postRoutes)
routes.use('/comment', commentRoutes)
routes.use('/like', likeRoutes)
routes.use('/uploads', uploadRoutes)

export { routes }
import { Router } from "express";
import { PostsController } from "@/controller/PostsController";

const postRoutes = Router()
const postController = new PostsController()

postRoutes.post('/', postController.create)

export { postRoutes }
import { Router } from "express";
import { PostsController } from "@/controller/PostsController";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";
import { uploadImagePost } from "@/middlewares/upload-image-post";

const postRoutes = Router()
const postController = new PostsController()

postRoutes.post('/new', ensureAuthenticated, verifyUserAuthorization(['admin', 'costumer']), uploadImagePost.single("imageUrl"), postController.create)
postRoutes.get('/', postController.index)

export { postRoutes }
import { Router } from "express";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";
import { CommentController } from "@/controller/CommentController";

const commentRoutes = Router()
const commentController = new CommentController()

commentRoutes.post('/', ensureAuthenticated, verifyUserAuthorization(['admin']),commentController.create)
commentRoutes.get('/:post_id',commentController.index)

export { commentRoutes }
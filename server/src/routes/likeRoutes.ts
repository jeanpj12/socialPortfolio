import { Router } from "express";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";
import { LikeController } from "@/controller/LikeController";

const likeRoutes = Router()
const likeController = new LikeController()

likeRoutes.post('/', ensureAuthenticated, verifyUserAuthorization(['admin', 'costumer', 'guest']),likeController.create)
likeRoutes.delete('/delete', ensureAuthenticated, verifyUserAuthorization(['admin', 'costumer', 'guest']),likeController.delete)

export { likeRoutes }
import { Router } from "express";
import { UserController } from "@/controller/UserController";
import { uploadAvatar } from "@/middlewares/upload-avatar";

const userRoutes = Router()
const userController = new UserController()

userRoutes.post('/create', uploadAvatar.single("avatar"), userController.create)

export { userRoutes }
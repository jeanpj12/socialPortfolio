import { Router } from "express";
import { UserController } from "@/controller/UserController";
import { upload } from "@/middlewares/upload-images";

const userRoutes = Router()
const userController = new UserController()

userRoutes.post('/create', upload.single("avatar"), userController.create)

export { userRoutes }
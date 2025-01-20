import { Router } from "express";
import { UserController } from "@/controller/UserController";

const userRoutes = Router()
const userController = new UserController()

userRoutes.post('/create', userController.create)

export { userRoutes }
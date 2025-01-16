import { Router } from "express";
import { SessionController } from "@/controller/SessionsController";

const sessionRoutes = Router()
const sessionController = new SessionController()

sessionRoutes.post('/', sessionController.create)

export { sessionRoutes }
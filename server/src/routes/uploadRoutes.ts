import { Router } from "express";
import { UploadAvatarController } from '../controller/UploadsAvatarController'
import { UploadImagePostController } from "@/controller/UploadImagePostController";

const uploadRoutes = Router()
const uploadAvatarController = new UploadAvatarController()
const uploadImagePostController = new UploadImagePostController()

uploadRoutes.get('/avatar/:filename', uploadAvatarController.index)
uploadRoutes.get('/image-post/:filename', uploadImagePostController.index)

export { uploadRoutes }
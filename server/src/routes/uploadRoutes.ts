import { Router } from "express";
import { UploadController } from '../controller/UploadsController'

const uploadRoutes = Router()
const uploadController = new UploadController()

uploadRoutes.get('/:filename', uploadController.create)

export { uploadRoutes }
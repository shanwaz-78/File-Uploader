import { Router } from "express";
import controllers from "../controllers/index.js";

const router = Router();

router.post("/upload-file", controllers.fileController.fileUploadController);

export default router;

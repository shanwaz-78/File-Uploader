import cors from "cors";
import express from "express";
import helmet from "helmet";
import routes from "./routes/index.js";
import multer from "multer";

const app = express();

app.use(helmet({ strictTransportSecurity: true }));
app.use(cors({ origin: "http://localhost:5173", methods: ["GET", "POST"] }));
app.use(express.json({ limit: "5mb" }));

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use("/api", upload.single("file"), routes.fileUploadRoutes);

export default app;

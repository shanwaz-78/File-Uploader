import services from "../services/index.js";

const fileUploadController = (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: `No File Uploaded.` });
  }
  return services.fileUploadServices.fileUploadService(req, res);
};

export default { fileUploadController };

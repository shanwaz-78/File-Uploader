import { uploadFile } from "../utils/fileUploadUtil.js";

const fileUploadService = async (data, res) => {
  try {
    const result = await uploadFile(data.file.buffer, data.file.mimetype);
    return res.status(200).send(result);
  } catch (error) {
    console.log(`[Error]: in upload service:- ${error.message}`);
    return res
      .status(500)
      .json({ message: "Failded to upload file. Try again later." });
  }
};

export default { fileUploadService };

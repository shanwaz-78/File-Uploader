import cloudinary from "../config/cloudinaryConfig.js";

export const uploadFile = async (fileBuffer, mimeType, folder = "uploads") => {
  try {
    const b64 = Buffer.from(fileBuffer).toString("base64");
    const dataURI = `data:${mimeType};base64,${b64}`;
    const result = await cloudinary.uploader.upload(dataURI, {
      resource_type: "auto",
      folder,
    });
    console.log(result)
    return {
      message: "File processed successfully.",
      url: result.secure,
      public_id: result.public_id,
      format: result.format,
      bytes: result.bytes,
    };
  } catch (error) {
    throw new Error(`Cloudinary upload failed: ${error.message}`);
  }
};

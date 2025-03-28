import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_URL || "http://localhost:8181";

const api = axios.create({ baseURL });

export const uploadFile = async (data) => {
  try {
    const response = await api.post(`/api/upload-file`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("File upload failed:", error.response?.data || error.message);
    throw error;
  }
};

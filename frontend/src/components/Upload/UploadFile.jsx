import React, { useState } from "react";
import styles from "./Upload.module.css";
import { uploadFile } from "@services/UploadFileService";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      toast.error("Please select a file first.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", selectedFile); 

      const { message } = await uploadFile(formData);
      toast.success(message || "File uploaded successfully!");
    } catch (error) {
      toast.error(
        `Upload failed: ${error.response?.data?.message || error.message}`
      );
      console.error(`[Error]: Uploading File - ${error.message}`);
    }
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <form onSubmit={handleFormSubmit}>
          <input type="file" onChange={handleFileChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default UploadFile;

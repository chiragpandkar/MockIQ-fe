import React, { useState } from "react";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import axios from "axios";

const ResumeUpload = () => {
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState("");
    const [loading, setLoading] = useState(false);

    // Handle file selection
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    // Handle file upload
    const handleUpload = async () => {
        if (!file) {
            setUploadStatus("Please select a file first!");
            return;
        }

        const formData = new FormData();
        formData.append("resume", file);

        try {
            setLoading(true);
            setUploadStatus("");

            const response = await axios.post("http://localhost:5000/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            setUploadStatus("Upload successful!");
            console.log("File uploaded:", response.data);
        } catch (error) {
            setUploadStatus("Upload failed!");
            console.error("Upload error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                p: 3,
                border: "1px solid #ddd",
                borderRadius: "8px",
                width: "320px",
                textAlign: "center",
                boxShadow: 2,
                backgroundColor: "#fff",
            }}
        >
            <Typography variant="h6" gutterBottom>
                Upload Resume
            </Typography>

            <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                style={{ marginBottom: "10px" }}
            />

            <Button
                variant="contained"
                startIcon={<UploadFileIcon />}
                onClick={handleUpload}
                disabled={loading}
                sx={{ mt: 2, width: "100%" }}
            >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Upload"}
            </Button>

            {uploadStatus && (
                <Typography variant="body2" sx={{ mt: 2, color: uploadStatus.includes("failed") ? "red" : "green" }}>
                    {uploadStatus}
                </Typography>
            )}
        </Box>
    );
};

export default ResumeUpload;

// ResumeUpload.js
import React, { useMemo } from "react";
import {
    Box,
    Button,
    Typography,
    CircularProgress,
    Paper,
    IconButton,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CloseIcon from "@mui/icons-material/Close";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const ResumeUpload = ({
    handleFileChange,
    handleRemoveResume,
    handleUpload,
    fileInputRef,
    file,
    uploadStatus,
    loading,
}) => {
    const maxSize = useMemo(()=>{
        return 1 * 1024 * 1024;
    }, []);
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
                Upload
            </Typography>

            <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                ref={fileInputRef}
                hidden
            />

            {!file ? (
                <Button
                    variant="outlined"
                    component="span"
                    onClick={() => fileInputRef.current.click()}
                    fullWidth
                >
                    Choose File
                </Button>
            ) : (
                <Paper
                    elevation={2}
                    sx={{
                        mt: 2,
                        mb: 2,
                        px: 2,
                        py: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexDirection: "column"
                    }}
                >
                    <Box display="flex" alignItems="center">
                        <InsertDriveFileIcon sx={{ mr: 1 }} />
                        <Typography variant="body2" noWrap>
                            {file.name}
                        </Typography>
                        <IconButton onClick={handleRemoveResume} size="small">
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Box>
                    <Box display="flex" alignItems="center">
                        {file?.size > maxSize ? <Typography color="red">File size exceeds maximum limit (2MB)</Typography> : ""}
                    </Box>
                </Paper>
            )}
            <Button
                variant="contained"
                startIcon={<UploadFileIcon />}
                onClick={handleUpload}
                disabled={loading || file?.size > maxSize}
                sx={{ mt: 1, width: "100%" }}
            >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Upload"}
            </Button>

            {uploadStatus && (
                <Typography
                    variant="body2"
                    sx={{ mt: 2, color: uploadStatus.includes("failed") ? "red" : "green" }}
                >
                    {uploadStatus}
                </Typography>
            )}
        </Box>
    );
};

export default ResumeUpload;

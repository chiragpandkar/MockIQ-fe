// Dashboard.js
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { validateToken, uploadResume } from "../apis/services";
import ResponsiveAppBar from "../components/Navbar";
import ResumeUpload from "../components/ResumeUpload";
import useCurrentUser from "../hooks/useCurrentUser";
import ProfilePopover from "../components/ProfilePopover";
import { Box } from "@mui/material";

const Dashboard = () => {
    const navigate = useNavigate();
    const { email, username } = useCurrentUser();
    const token = localStorage.getItem("token");

    const [anchorEl, setAnchorEl] = useState(null); 
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState("");
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef();

    useEffect(() => {
        const checkToken = async () => {
            if (!token) {
                navigate("/sign-in");
                return;
            }
            try {
                await validateToken(token);
            } catch (error) {
                console.error("Invalid token, redirecting to sign-in...");
                localStorage.removeItem("token");
                navigate("/sign-in");
            }
        };

        checkToken();
    }, [navigate, token]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/sign-in");
    };

    const handleProfileClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileClose = () => {
        setAnchorEl(null);
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setUploadStatus("");
        }
    };

    const handleRemoveResume = () => {
        setFile(null);
        setUploadStatus("");
        fileInputRef.current.value = null;
    };

    const handleUpload = async () => {
        if (!file) {
            setUploadStatus("Please select a file first!");
            return;
        }


        try {
            setLoading(true);
            setUploadStatus("");

            const response = await uploadResume(file, token);

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
        <>
            <ResponsiveAppBar onLogout={handleLogout} onProfile={handleProfileClick} />

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 4 }}>
                <ResumeUpload
                    handleFileChange={handleFileChange}
                    handleRemoveResume={handleRemoveResume}
                    handleUpload={handleUpload}
                    fileInputRef={fileInputRef}
                    file={file}
                    uploadStatus={uploadStatus}
                    loading={loading}
                />
            </Box>

            {/* Optional Profile Popover */}
            <ProfilePopover
                anchorEl={anchorEl}
                handleClose={handleProfileClose}
                username={username}
                email={email}
            />
        </>
    );
};

export default Dashboard;

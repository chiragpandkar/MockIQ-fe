import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateToken } from "../apis/services";
import ResponsiveAppBar from "../components/Navbar";
import ProfilePopover from "../components/ProfilePopover";
import useCurrentUser from "../hooks/useCurrentUser";

const Dashboard = () => {
    const navigate = useNavigate();
    const { email, username } = useCurrentUser();
    const token = localStorage.getItem("token");

    const [anchorEl, setAnchorEl] = useState(null); 

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

    return (
        <>
            <ResponsiveAppBar onLogout={handleLogout} onProfile={handleProfileClick} />

            {/* Profile Popover */}
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

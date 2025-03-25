import React from "react";
import { Popover, Card, CardContent, Typography } from "@mui/material";

const ProfilePopover = ({ anchorEl, handleClose, username, email }) => {
    const open = Boolean(anchorEl);
    const id = open ? "profile-popover" : undefined;

    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
        >
            <Card sx={{ width: 250, p: 2 }}>
                <CardContent>
                    <Typography variant="h6">Profile</Typography>
                    <Typography variant="body1">
                        <strong>Username:</strong> {username || "N/A"}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Email:</strong> {email || "N/A"}
                    </Typography>
                </CardContent>
            </Card>
        </Popover>
    );
};

export default ProfilePopover;

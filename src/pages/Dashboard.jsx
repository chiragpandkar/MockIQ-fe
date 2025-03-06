import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { validateToken } from '../apis/services';
import { Button } from '@mui/material';
import ResponsiveAppBar from '../components/Navbar';

const Dashboard = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    useEffect(() => {
        const checkToken = async () => {
            if(!token) {
                navigate('/sign-in');
                return;
            }
            try{
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
        localStorage.removeItem('token');
        navigate("/sign-in");
    }

    return (
    <>
        <ResponsiveAppBar onLogout={handleLogout}/>
    </>
    
    )
}

export default Dashboard
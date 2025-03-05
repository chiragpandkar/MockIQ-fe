import React, { useState } from 'react';
import SignIn from '../components/SignIn';
import { signIn } from '../apis/services';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: true,
    });

    const handleChange = (event) => {
        const {name, value, type, checked} = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async () => {
        try {
            console.log(formData);
            const response = await signIn(formData.email, formData.password);
            if(response?.access_token) {
                localStorage.setItem("token", response.access_token);
                console.log("Login successful!");
                navigate('/dashboard');
            } else {
                console.log("Invalid response from server: ", response);
                throw new Error("Invalid response from server: ", response);
            }
        } catch (error) {
            console.log("Login failed: ",  error);
            alert(error.error ||  "Login failed");
        }        
    }

    const handleSignUp = () => {
        navigate("/sign-up")
    }

  return (
    <SignIn formData={formData} onChange={handleChange} onSubmit={handleSubmit} onSignUp={handleSignUp}/>
  );
};

export default LoginPage;
import axios from 'axios';

export const signIn = async (email, password) => {
    try{
        const config = {
            method: 'POST',
            url: 'auth/signin',
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                username_or_email: email,
                password: password,
            },
        };

        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.log("Sign-In error: ", error.response?.data || error.messge);
        throw error.response?.data || {error: "Network error"}; 
    }
};

export const signUp = async (username, email, password) => {
    try{
        const config = {
            method: 'POST',
            url: 'auth/register',
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                username: username,
                email_id: email,
                password: password,
            },
        };

        const response = await axios(config);
        return response;
    } catch (error) {
        console.log("Sign-In error: ", error.response?.data || error.messge);
        throw error.response?.data || {error: "Network error"}; 
    }
};

export const validateToken = async (token) => {
    try{
        const config = {
            method: 'GET',
            url: 'auth/validate-token',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        }

        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.log("Validate token error: ", error.response?.data || error.messge);
        throw error.response?.data  || {error: "Network error"};
    }
};

export const getCurrentUser = async (token) => {
    try{
        const config = {
            method: 'GET',
            url: 'users/me',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        } 

        const response = await axios(config);
        return response;
    } catch (error) {
        console.log("Get current user error: ", error);
        throw error.response?.data || {error: "Network error"};
    }
};

export const uploadResume = async (file, token) => {
    try {
        const formData = new FormData();
        formData.append('file', file);

        const config = {
            method: 'POST',
            url: 'resume/upload-resume',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            },
            data: formData
        };

        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.log("Error while uploading resume: ", error);
        throw error.response?.data || { error: "Network error" };
    }
};
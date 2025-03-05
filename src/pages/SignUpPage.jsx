import React, {useState} from 'react';
import SignUp from '../components/SignUp';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../apis/services';

const SignUpPage = () => {
    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState(false);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        createPassword: '',
        confirmPassword: '',
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPasswordError()
        setFormData((prev) => {

            const updatedForm = {...prev, [name]: value};
            setPasswordError(updatedForm.createPassword !== updatedForm.confirmPassword);
            return updatedForm
        });
    };

    const handleSignIn = () => {
        navigate("/sign-in");
    };

    const handleSubmit = async () => {
        try{
            const response = await signUp(formData.username, formData.email, formData.createPassword);
            if(response.status == 201) {
                alert("User created successfully!")
                setTimeout(()=>{
                    navigate("/sign-in")
                }, 3000)
            }
        } catch(error) {

        }
    };

    return (
        <SignUp onChange={handleChange} onSubmit={handleSubmit} onSignIn={handleSignIn} formData={formData} passwordError={passwordError}/>
    );
};

export default SignUpPage;
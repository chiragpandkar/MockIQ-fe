import { Button, Paper, TextField, Box, Typography, Link } from '@mui/material';
import React from 'react';

const SignUp = ({formData, onChange, onSubmit, onSignIn, passwordError}) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Paper sx={{minWidth:'300px', minHeight:'300px', width: '30vw', height: '60vh', padding: '1%', display: 'flex', flexDirection: 'column', gap: '5%', alignItems: 'center', boxShadow: '10'}}>
            <Typography variant='h5' paddingTop='2%' sx={{fontWeight: 'bold'}}>Signup to MockIQ</Typography>
            <TextField name='username' label='Username' required variant='outlined' size='small' sx={{width:'80%'}} value={formData.username} onChange={onChange}/>
            <TextField name='email' label='Email' required variant='outlined' size='small' sx={{width:'80%'}} value={formData.email} onChange={onChange}/>
            <TextField name='createPassword' label='Create Password' required variant='outlined' size='small' type='password' sx={{width:'80%'}} value={formData.createPassword} onChange={onChange}/>
            <TextField name='confirmPassword' label='Confirm Password' required variant='outlined' size='small' type='password' sx={{width:'80%'}} value={formData.confirmPassword} onChange={onChange} error={passwordError} helperText={passwordError ? "Password do not match!" : ""}/>
            <Button size='large' variant='contained' sx={{width:'80%', textTransform:'none'}} onClick={onSubmit}> Signup</Button>
            <Link sx={{cursor: 'pointer'}} onClick={onSignIn}>Sign in</Link>
        </Paper>
    </Box>
  );
};

export default SignUp;
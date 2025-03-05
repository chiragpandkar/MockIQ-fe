import { Box, Paper, TextField, Typography, FormControlLabel, FormGroup, Checkbox, Button, Link } from '@mui/material'
import React from 'react'


const SignIn = ({formData, onChange, onSubmit, onSignUp}) => { 
    return (

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Paper sx={{minWidth:'300px', minHeight:'300px', width: '30vw', height: '55vh', padding: '1%', display: 'flex', flexDirection: 'column', gap: '5%', alignItems: 'center', boxShadow: '10'}}>
                <Typography variant='h5' sx={{ fontWeight: 'bold', pt: '1%' }}> Sign in to MockIQ </Typography>
                <Typography sx={{color: 'GrayText'}}> Welcome, please sign in to continue </Typography>

                <TextField required name='email' label="Email" variant="outlined" size='small' sx={{ width: '80%' }} value={formData.email} onChange={onChange}/>
                <TextField required name='password' label="Password" variant='outlined' size='small' sx={{ width: '80%' }} type='password' value={formData.password} onChange={onChange}/>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '80%', }} color='textDisabled'>
                    <FormGroup sx={{ml: "2%"}} >
                        <FormControlLabel size="small" control={<Checkbox name='rememberMe' checked={formData.rememberMe} onChange={onChange}/>} label="Remember me" sx={{color: "GrayText"}}/>
                    </FormGroup>
                </Box>
                <Button variant='contained' size='large' sx={{width: '80%', textTransform: 'none'}} onClick={onSubmit} >Sign In</Button>
                <Link variant='body2' sx={{cursor: 'pointer', paddingBottom: '1%'}} onClick={onSignUp}>Sign up</Link>
            </Paper>
        </Box>
    )
}

export default SignIn
import { Box, Paper, TextField, Typography, FormControlLabel, FormGroup, Checkbox, Button } from '@mui/material'
import React from 'react'


const SignIn = () => {
    return (

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Paper sx={{minWidth:'30vw', minHeight:'300px', width: '30vw', height: '50vh', padding: '1%', display: 'flex', flexDirection: 'column', gap: '5%', alignItems: 'center' }}>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }}> Sign in to MockIQ </Typography>
                <Typography sx={{color: 'GrayText'}}> Welcome, please sign in to continue </Typography>

                <TextField required label="Email" variant="outlined" size='small' sx={{ width: '80%' }} />
                <TextField required label="Password" variant='outlined' size='small' sx={{ width: '80%' }} />
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '80%', }} color='textDisabled'>
                    <FormGroup sx={{ml: "2%"}} >
                        <FormControlLabel size="small" control={<Checkbox defaultChecked />} label="Remember me" sx={{color: "GrayText"}}/>
                    </FormGroup>
                </Box>
                <Button variant='contained' size='large' sx={{width: '80%', textTransform: 'none'}} >Sign In</Button>
            </Paper>
        </Box>
    )
}

export default SignIn
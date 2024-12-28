
import { useState } from "react";

import axios from 'axios';

import { 
    Box, Typography, FormControl,
    FormLabel, TextField, Button, 

} from "@mui/material"
import { formBoxStyle, formControlStyle, bgcolorformelement } from "../Signupform/Signupform";
import { useNavigate } from "react-router-dom";




export default function Signinform() {

  const navigate = useNavigate()

  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');

  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    // here the login takes place
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/login',{
        email,
        password,
      },{
        withCredentials: true,
      });

      console.log(response);
      // if everything goes well the token will be send back in response as token
      const token = response.data.token;
      localStorage.setItem('authToken', token);
      return token;
    } catch (error){
      console.log(error)
    }



    // now we check the token and see, if everything is gucci
    const token = localStorage.getItem('authToken')
    if(token){
      navigate('/dashboard')
    } else {
      navigate('/accessdenied')
    }

  }

  const validateInputs = () => {
      const password = document.getElementById('password') as HTMLInputElement;
      const name = document.getElementById('name') as HTMLInputElement;
  
      let isValid = true;
  


      if (!name.value || name.value.length < 1) {
          setNameError(true);
          setNameErrorMessage('Name is required.');
          isValid = false;
        } else {
          setNameError(false);
          setNameErrorMessage('');
        }

        if (!password.value || password.value.length < 6) {
          setPasswordError(true);
          setPasswordErrorMessage('Password must be at least 6 characters long.');
          isValid = false;
        } else {
          setPasswordError(false);
          setPasswordErrorMessage('');
        }
  }



  return (
    <>  
        <Box sx={formBoxStyle} component="form" onSubmit={handleLogin}>
          <Typography variant="h5" sx={{align: 'center', color: 'white'}} gutterBottom>
            Sign in
          </Typography>
          <Typography variant="subtitle2" sx={{align: 'center', color: 'white'}} >
            Use these credentials:
          </Typography>
          <Typography variant="subtitle2" sx={{align: 'center', color: 'white'}} >
            For Admin: Admin Pw: admin123?
          </Typography>
          <Typography variant="subtitle2" sx={{align: 'center', color: 'white'}} gutterBottom>
            For User: User Pw: user123? 
          </Typography>
          <FormControl sx={formControlStyle}>
            <FormLabel htmlFor="name">Full name</FormLabel>
            <TextField
                sx={bgcolorformelement}
                autoComplete="name"
                name="email"
                required
                fullWidth
                id="name"
                placeholder="your name"
                error={nameError}
                helperText={nameErrorMessage}
                color={nameError ? 'error' : 'primary'}
            />
            </FormControl>


            <FormControl sx={formControlStyle}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <TextField
                    sx={bgcolorformelement}
                    required
                    fullWidth
                    name="password"
                    placeholder="••••••"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    variant="outlined"
                    error={passwordError}
                    helperText={passwordErrorMessage}
                    color={passwordError ? 'error' : 'primary'}
                />
            </FormControl>

            <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={validateInputs}
                sx={{
                  bgcolor: 'yellow',
                  color: 'magenta',
                  '&:hover': {
                    bgcolor: 'magenta',
                    color: 'darkblue',
                  }
                }}
                >
                Sign up
            </Button>
        </Box>
    </>
  )
}

import { useState } from "react";

import { 
  Card, Box, Typography, FormControl,
  FormLabel, TextField, Checkbox, FormControlLabel,
  Link, Button, Divider,
  colors
} from "@mui/material"



export const formBoxStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'black',
  boxShadow: 24,
  p: 4,
  border: '2px solid magenta',
  borderRadius: '7px',
};


export const formControlStyle = {
  bgcolor: 'magenta',
  p: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  border: '2px solid blue',
  borderRadius: '7px',
  
}

export const bgcolorformelement = {
  bgcolor: 'white',
}


      
export default function Signupform() {
   
  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  
  const validateInputs = () => {
      const email = document.getElementById('email') as HTMLInputElement;
      const password = document.getElementById('password') as HTMLInputElement;
      const name = document.getElementById('name') as HTMLInputElement;
  
      let isValid = true;
  
      if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
        setEmailError(true);
        setEmailErrorMessage('Please enter a valid email address.');
        isValid = false;
      } else {
        setEmailError(false);
        setEmailErrorMessage('');
      }


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


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        name: data.get('name'),
        lastName: data.get('lastName'),
        email: data.get('email'),
        password: data.get('password'),
      });
    };


  return (
    <>
        <Box sx={formBoxStyle} component="form" onSubmit={handleSubmit}>
            <Typography variant="h5" sx={{align: 'center', color: 'white'}} gutterBottom>
              You need to sign up... or do you?
            </Typography>
            <Typography variant="subtitle2" sx={{align: 'center', color: 'white'}} gutterBottom>
              Just use the credential I provide in the Signin Form. They are sufficient. I don't want to keep data from other people. Pls don't publish any sensitive data here. Or do it I'll delete it anyway.
            </Typography>

            <FormControl sx={formControlStyle}> 
              <FormLabel htmlFor="name" >Full Name</FormLabel>
              <TextField
                sx={bgcolorformelement}
                autoComplete="name"
                name="name" 
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
                <FormLabel htmlFor="email">Email</FormLabel>
                <TextField
                    sx={bgcolorformelement}
                    error={emailError}
                    helperText={emailErrorMessage}
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    autoFocus
                    required
                    fullWidth
                    variant="outlined"
                    color={emailError ? 'error' : 'primary'}
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
                    sx={{
                      bgcolor: 'yellow',
                      color: 'magenta',
                      '&:hover': {
                        bgcolor: 'magenta',
                        color: 'darkblue',
                      }
                    }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={validateInputs}
                    >
                    Sign up
                </Button>
        </Box>
    </>
  )
}
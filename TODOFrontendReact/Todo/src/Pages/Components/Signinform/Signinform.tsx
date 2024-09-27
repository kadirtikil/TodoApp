
import { useState } from "react";

import { 
    Card, Box, Typography, FormControl,
    FormLabel, TextField, Checkbox, FormControlLabel,
    Link, Button, Divider

} from "@mui/material"
import { formBoxStyle, formControlStyle } from "../Signupform/Signupform";




export default function Signinform() {


  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');

  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  
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
    

    const style = {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

  return (
    <>  
        <Box sx={formBoxStyle} component="form" onSubmit={handleSubmit}>
          <Typography variant="h5" sx={{align: 'center', color: 'white'}} gutterBottom>
            Sign in boi
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
                <FormLabel htmlFor="password">Password</FormLabel>
                <TextField
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

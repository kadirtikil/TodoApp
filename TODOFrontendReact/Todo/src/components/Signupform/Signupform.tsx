import { useState } from "react";

import { 
    Card, Box, Typography, FormControl,
    FormLabel, TextField, Checkbox, FormControlLabel,
    Link, Button, Divider

} from "@mui/material"

import MuiCard from '@mui/material/Card';


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
            <Box sx={style} component="form" onSubmit={handleSubmit}>
                <Card variant="outlined">   

                <FormControl>
                  <FormLabel htmlFor="name">Full name</FormLabel>
                  <TextField
                    autoComplete="name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    placeholder="Jon Snow"
                    error={nameError}
                    helperText={nameErrorMessage}
                    color={nameError ? 'error' : 'primary'}
                  />
                </FormControl>



                <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <TextField
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
                        sx={{ ariaLabel: 'email' }}
                    />
                    </FormControl>


                    <FormControl>
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
                        >
                        Sign up
                    </Button>
                </Card>
            </Box>
        </>
    )
}
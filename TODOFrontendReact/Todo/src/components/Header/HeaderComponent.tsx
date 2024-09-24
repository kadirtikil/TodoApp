import './HeaderComponents.css';

import { 
    Stack, Button, Modal, Box
} from '@mui/material';


import Signupform from '../Signupform/Signupform';
import { useState } from 'react';
import Signinform from '../Signinform/Signinform';



export default function HeaderComponent() {
    const [openSignup, setOpenSignup] = useState(false);
    const handleOpenSignup = () => setOpenSignup(true);
    const handleCloseSignup = () => setOpenSignup(false);

    const [openSignin, setOpen] = useState(false);
    const handleOpenSignin = () => setOpen(true);
    const handleCloseSignin = () => setOpen(false);


    return (
        <>
            <div className="headercomponentcontainer">
                <div className="headercomponentheadline">
                    <h1>Todo APP by Kadir</h1>
                </div>
                <div className="startsigningoptions">
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" onClick={handleOpenSignin}>Signin</Button>
                        <Button variant="outlined" onClick={handleOpenSignup}>Signup</Button>
                    </Stack>
                </div>
            </div>

            <Modal 
            open={openSignup} 
            onClose={handleCloseSignup} 
            >
                <Box>
                    <Signupform></Signupform>
                </Box>
            </Modal>

            <Modal 
            open={openSignin} 
            onClose={handleCloseSignin} 
            >
                <Box>
                    <Signinform></Signinform>
                </Box>
            </Modal>
        </>
    )
}
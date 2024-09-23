import './HeaderComponents.css';

import { 
    Stack, Button, Modal
} from '@mui/material';


import Signupform from '../Signupform/Signupform';
import { useState } from 'react';



export default function HeaderComponent() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <div className="headercomponentcontainer">
                <div className="headercomponentheadline">
                    <h1>Todo APP by Kadir</h1>
                </div>
                <div className="startsigningoptions">
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined">Signin</Button>
                        <Button variant="outlined" onClick={handleOpen}>Signup</Button>
                    </Stack>
                </div>
            </div>

            <Modal 
            open={open} 
            onClose={handleClose} 
            >
                <Signupform></Signupform>
            </Modal>
        </>
    )
}
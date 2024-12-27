import './HeaderComponents.scss';
import { useState } from 'react';



import { 
    Stack, Button, Modal, Box
} from '@mui/material';


import Signinform from '../../Signinform/Signinform';
import Signupform from '../../Signupform/Signupform';
import InformationComponent from '../../../Information/Information';

import SvgTitle from '../../../../assets/Title.svg';
import InformationSvg from '../../../../assets/information.svg';

export default function HeaderComponent() {
    const [openSignup, setOpenSignup] = useState(false);
    const handleOpenSignup = () => setOpenSignup(true);
    const handleCloseSignup = () => setOpenSignup(false);

    const [openSignin, setOpen] = useState(false);
    const handleOpenSignin = () => setOpen(true);
    const handleCloseSignin = () => setOpen(false);

    const [openInformation, setInformation] = useState(false);
    const handleOpenInformation = () => setInformation(true);
    const handleCloseInformation = () => setInformation(false);
    



    return (
        <>
            <div className="headercomponentcontainer">
                <div className="headercomponentheadline">
                    <img width={300} src={SvgTitle} alt="" />

                </div>
                <div className="startsigningoptions">
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" onClick={handleOpenSignin}>Signin</Button>
                        <Button variant="outlined" onClick={handleOpenSignup}>Signup</Button>
                        <img className='informationsvg' src={InformationSvg} width={33} alt="" onClick={handleOpenInformation}/>
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

            <Modal 
                open={openInformation}
                onClose={handleCloseInformation}
                >

                <InformationComponent />
            </Modal>
        </>
    )
}
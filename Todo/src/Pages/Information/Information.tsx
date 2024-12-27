import './Information.scss'

import { Typography, Box } from "@mui/material"



const informationBoxStyle = {
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
    color: 'white',
  };

export default function InformationComponent() {

    function openGitHub() {
        window.open('https://www.github.com/kadirtikil','_blank');
    }

    return(
        <>
            <Box sx={informationBoxStyle}>
                <Typography variant='subtitle2'>
                    This Website only serves to display my current skillset and should not be used or taken seriously. 
                    It's more of a Joke because everyone basically does a ToDo app to show that they can do CRUD operations.
                    
                    Furthermore, this application does not save anything persistently. After a session is over, everything that has 
                    been created will be deleted. 

                    The data displays in the Admin Dashboard only uses data from seeders in Laravel.
                </Typography>
            </Box>
        </>
    )
}
import './HeaderAdminComponent.scss'

import { Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

export default function  HeaderAdminComponent() { 

    const hoverAdminOptionsTopLeft = {
        color: 'yellow',
        '&:hover': {
            color: 'magenta',
            cursor: 'pointer',
        },
    };


    return(
        <>
            <div className="headeradmincontainer">
                <div className="adminHeaderHeadline">
                    <Typography variant='h5' gutterBottom > 
                        Admin Panel
                    </Typography>
                </div>
                <div className="adminlogout">
                    <LocalActivityIcon
                        sx={hoverAdminOptionsTopLeft}
                    />
                    <ChatBubbleIcon
                        sx={hoverAdminOptionsTopLeft}
                    />
                    <LogoutIcon
                        sx={hoverAdminOptionsTopLeft}
                    />
                </div>
            </div>
        </>
    )
}
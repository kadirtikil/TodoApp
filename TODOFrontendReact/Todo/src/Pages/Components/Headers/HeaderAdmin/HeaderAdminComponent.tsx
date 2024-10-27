import './HeaderAdminComponent.scss'

import { Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';

export default function  HeaderAdminComponent() { 


    return(
        <>
            <div className="headeradmincontainer">
                <div className="adminHeaderHeadline">
                    <Typography variant='h5' gutterBottom > 
                        Admin Panel
                    </Typography>
                </div>
                <div className="adminlogout">
                    <LogoutIcon />
                </div>
            </div>
        </>
    )
}
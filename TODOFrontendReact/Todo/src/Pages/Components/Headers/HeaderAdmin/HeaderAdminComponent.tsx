import './HeaderAdminComponent.scss'

import { Typography } from '@mui/material'

export default function  HeaderAdminComponent() { 


    return(
        <>
            <div className="headeradmincontainer">
                <Typography variant='h5' gutterBottom > 
                    Admin Panel
                </Typography>
            </div>
        </>
    )
}
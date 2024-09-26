
import './Error.scss'

import { Typography } from '@mui/material'

export default function ErrorPage() {


    return (
        <>
           <div className="errorpagecontainer">
                <Typography variant='h1' sx={{display: 'flex', justifyContent: 'center', paddingTop:20}}>
                    A C C E S S D E N I E D! 
                </Typography>
                <Typography variant='h2' sx={{display: 'flex', justifyContent: 'center', paddingTop:20}}>
                    FBI is on it's way.
                </Typography>
           </div>
        </>
    )

}
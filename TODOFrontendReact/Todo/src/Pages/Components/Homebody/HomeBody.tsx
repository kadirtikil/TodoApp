import './HomeBody.scss'

import { Typography } from '@mui/material'

export default function HomeBodyComponent() {


    return (
        <>
            <div className="homebodycomponentcontainer">
                <Typography variant='h2' gutterBottom sx={{p: 33}}>
                    Welcome To my new Todo App
                </Typography>
            </div>
        </>
    )
}
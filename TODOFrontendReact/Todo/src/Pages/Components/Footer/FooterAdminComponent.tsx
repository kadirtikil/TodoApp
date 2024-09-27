import './FooterAdminComponent.scss'

import { Stack, Link } from '@mui/material'

export default function FooterAdminComponent() {
    
    return (
        <>
            <div className="footeradmincomponentcontainer">
                <Stack direction={'row'} spacing={2}>
                    <Link href="#" underline="always" sx={{color: 'white'}}>
                    {'Kontakt'}
                    </Link>
                    <Link href="#" underline="always" sx={{color: 'white'}}>
                    {'Impressum'}
                    </Link>
                    <Link href="#" underline="always" sx={{color: 'white'}}>
                    {'Weiteres'}
                    </Link>
                </Stack>
            </div>
        </>
    )

}
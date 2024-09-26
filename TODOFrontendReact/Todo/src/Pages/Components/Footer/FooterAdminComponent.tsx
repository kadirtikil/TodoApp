import './FooterAdminComponent.scss'

import { Stack } from '@mui/material'

export default function FooterAdminComponent() {
    
    return (
        <>
            <div className="footeradmincomponentcontainer">
                <Stack direction={'row'} spacing={2}>
                    <p>Kontakt</p>
                    <p>Impressum</p>
                    <p>Weiteres</p>
                </Stack>
            </div>
        </>
    )

}
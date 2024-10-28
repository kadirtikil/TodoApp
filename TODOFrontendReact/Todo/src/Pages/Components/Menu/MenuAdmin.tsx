import './ManuAdmin.scss'
import { useEffect, useState } from 'react'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemText } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import BlockIcon from '@mui/icons-material/Block';


// Type for the user to match the json
type User = {
    id: number,
    name: string,
    email: string,
}


// Will contain the most recently registered users.
export default function AdminMenuComponent() {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/indexUser")
            .then((response) => {
                return response.json()
            }).then((data) => {
                setUsers(data.data.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    const icondesignUserList = {
        color: 'yellow',
        '&:hover': {
            color: 'magenta',
            cursor: 'pointer',
        },
    }

    return (
        <>
            <div className="adminmenucontainer">    
                <div className="adminoperations">
                    <AddCircleIcon
                        sx={icondesignUserList}
                    />
                    <EditIcon
                        sx={icondesignUserList}
                    />
                </div>

                <div className="usersforadmin">
                    <List>
                        {
                            users.map((value) => {
                                return(
                                    <ListItem 
                                        key={value.id}
                                        secondaryAction={
                                            <>
                                            <IconButton edge="end" aria-label="comments" sx={{color: 'white'}}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton edge="end" aria-label="comments" sx={{color: 'white'}}>
                                                <BlockIcon />
                                            </IconButton>
                                            </>
                                        }
                                        >
                                        <ListItemText sx={{color: 'white'}}>
                                            {value.name}
                                        </ListItemText>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </div>
            </div>
        </>
    )
}
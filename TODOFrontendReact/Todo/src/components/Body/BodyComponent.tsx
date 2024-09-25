import { useState, useEffect } from "react"

import { 
    Box, Container
} from "@mui/material"

import { DataGrid, GridColDef, gridClasses} from "@mui/x-data-grid"
import { grey } from "@mui/material/colors"

const style = {
   
}




type Task = {
    id: number,
    title: string,
    description: string,
    created_at: string,
    pending: number,
    participants: number[],
    deadline: string,
    updated_at: string,
}

type Tasks = Task[];

export default function BodyComponent() {
    const [posts, setPosts] = useState<Tasks>([])

    useEffect(() => {
        fetch('http://localhost:8000/api/indexTask')
            .then((response) => {
                return response.json()
            }).then((data) => {
                setPosts(data[0])
            })
    }, [])

    useEffect(() => console.log(posts))

    const cols: GridColDef<(typeof posts)[number]>[] = [
        {
          field: 'title',
          headerName: 'Title',
          width: 150,
        },
        {
          field: 'description',
          headerName: 'Description',
          width: 400,
        },
        {
          field: 'created_at',
          headerName: 'Created at',
          width: 200,
        },
        {
          field: 'participants',
          headerName: 'Participants',
          width: 110,
        },
        {
          field: 'deadline',
          headerName: 'Deadline',
          width: 110,
        },
        {
          field: 'updated_at',
          headerName: 'Last update',
          width: 110,
        },
    ]

    return (
        <>
            <Container>
                <Box sx={style}>
                    <DataGrid
                        sx={{
                            [`& .${gridClasses.row}`]: {
                                bgcolor: "lightgrey",
                            }
                        }}
                        
                        
                        getRowSpacing={params=>({
                            top: params.isFirstVisible ? 0 : 5,
                            bottom: params.isLastVisible ? 0 : 5,
                        })}
                        getRowHeight={() => 'auto'}
                        getEstimatedRowHeight={() => 65}

                        rows={posts}
                        columns={cols}
                        initialState={{
                        pagination: {
                            paginationModel: {
                            pageSize: 8,
                            },
                        },
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </Box>
            </Container>
        </>
    )
}
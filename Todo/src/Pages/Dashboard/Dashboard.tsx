import axios from "axios";
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";




export default function Dashboard() {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');

        if(!token){
            navigate('/accessdenied')
        } else {
            console.log('passed')
        }

    })

    const handlelogout= async () => {
        axios.post('localhost:8000/logout')
    }


    return (
        <>
            <h1>Dashbnoard</h1>
            <button onClick={handlelogout}> logout </button>
        </>
    )
}
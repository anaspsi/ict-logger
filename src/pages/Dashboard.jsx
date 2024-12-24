import { useEffect } from "react"
import { useNavigate } from "react-router"
import { Outlet } from "react-router"


export default function Dashboard({ userInfo }) {
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('token')) {
        } else {
            navigate('/')
        }
    }, [])

    return (
        <Outlet />
    )
}
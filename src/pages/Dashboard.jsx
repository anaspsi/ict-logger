import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Home from "./Home"
import PSIOffCanvas from "../components/PSIOffCanvas"

export default function Dashboard({ onLoggedIn, userInfo, showOffCanvas, handleCloseOffCanvas }) {
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('token')) {
        } else {
            navigate('/')
        }
    }, [])

    return (
        <>

            <Home userInfo={userInfo} />
            <PSIOffCanvas onLoggedIn={onLoggedIn} showOffCanvas={showOffCanvas} userInfo={userInfo} onCloseOffCanvas={handleCloseOffCanvas} />
        </>
    )
}
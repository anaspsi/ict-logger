import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import About from "./About"
import PSINavbar from "./PSINavbar"
import { useState } from "react"
import Home from "./Home"

export default function Dashboard() {
    const navigate = useNavigate()
    const [activeComponent, setactiveComponent] = useState('home')
    
    useEffect(() => {
        if (localStorage.getItem('token')) {
        } else {
            navigate('/')
        }
    }, [])

    function handleClickNav(par) {
        setactiveComponent(par)
    }

    return (
        <>
            <PSINavbar onClickNav={handleClickNav} selectedNav={activeComponent} />
            <div className="container-fluid">
                {
                    activeComponent === 'home' && (<Home />)
                }
                {
                    activeComponent === 'about' && (<About />)
                }
            </div>
        </>
    )
}
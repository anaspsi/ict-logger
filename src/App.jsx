import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import PSINavbar from "./components/PSINavbar"
import { useEffect, useState } from "react"
import axios from "axios"

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState({})

  function handleLoggedIn(theval) {
    setIsLoggedIn(theval)
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }
    axios.get(import.meta.env.VITE_APP_ENDPOINT + '/user', config)
      .then((response) => {
        const datanya = response.data
        setUserInfo({ ...datanya })
      }).catch(error => {
        console.log({ at: 'app.jsx', error })
      })
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      handleLoggedIn(true)
    } else {
      handleLoggedIn(false)
    }
  }, [])


  return (
    <div>
      {
        isLoggedIn ? <PSINavbar onLoggedIn={handleLoggedIn} userInfo={userInfo} /> : ''
      }
      <Routes>
        <Route path="/" element={<Login onLoggedIn={handleLoggedIn} />} />
        <Route path="/dashboard" element={<Dashboard userInfo={userInfo} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Login onLoggedIn={handleLoggedIn} />} />
      </Routes>
    </div>
  )
}
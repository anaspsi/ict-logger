import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import PSINavbar from "./components/PSINavbar"
import { useEffect, useState } from "react"

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function handleLoggedIn(theval) {
    setIsLoggedIn(theval)
  }

  return (
    <div>
      {
        isLoggedIn ? <PSINavbar onLoggedIn={handleLoggedIn} /> : ''
      }
      <Routes>
        <Route path="/" element={<Login onLoggedIn={handleLoggedIn} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}
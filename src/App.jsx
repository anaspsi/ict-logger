import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import About from "./components/About"
export default function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}
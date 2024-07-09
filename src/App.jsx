import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
export default function App() {
  return (
    <div className="mt-3">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </div>
  )
}
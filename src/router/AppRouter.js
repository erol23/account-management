import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
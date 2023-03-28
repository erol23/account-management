import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"

const AppRouter = () => {
  const [user, setUser] = useState(false)

  console.log(user)

  return (
    <BrowserRouter>
        <Navbar user={user} />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login user={user} setUser={setUser}/>}/>
            <Route path="/register" element={<Register user={user} setUser={setUser}/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
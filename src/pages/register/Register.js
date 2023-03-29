import { useNavigate } from "react-router-dom"
import {RegisterContainer, RegisterForm, RegisterInput, RegisterButton } from "./Register.style"

const Register = ({user, setUser}) => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(!user)
    navigate("/")
  }

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleSubmit}>
        <RegisterInput type="email" placeholder="Email"/>
        <RegisterInput type="text" placeholder="Username"/>
        <RegisterInput type="password" placeholder="Password"/>
        <RegisterButton type="submit">Register</RegisterButton>
      </RegisterForm>
    </RegisterContainer>
  )
}

export default Register

import { useNavigate } from "react-router-dom"
import {LoginContainer ,LoginForm, LoginInput, LoginButton} from "./Login.style"

const Login = ({user, setUser}) => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(!user)
    navigate("/")
  }

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <LoginInput type="text" placeholder="Username"/>
        <LoginInput type="password" placeholder="Password"/>
        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
    </LoginContainer>
  )
}

export default Login
import {Nav, MenuLink, Logo} from "./Navbar.style";

const Navbar = ({user, setUser}) => {
  return (
    <Nav>
      <div>
        <Logo to="/">Account Management</Logo>
      </div>
      {user ? <div>
        <MenuLink to="/user">User Name</MenuLink>
        <MenuLink to="/login" onClick={() => setUser(false)}>LogOut</MenuLink>
      </div>
      :
      <div>
        <MenuLink to="/login">Sign In</MenuLink>
        <MenuLink to="/register">Sign Up</MenuLink>
      </div>
    }
    </Nav>
  )
}

export default Navbar
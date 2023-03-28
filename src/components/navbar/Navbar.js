import {Nav, MenuLink, Logo} from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Logo to="/">Account Management</Logo>
      </div>
      <div>
        <MenuLink to="/login">Sign In</MenuLink>
        <MenuLink to="/register">Sign Up</MenuLink>
      </div>
    </Nav>
  )
}

export default Navbar
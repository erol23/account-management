import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #7EDBFF;
  border-radius: 0 0 10px 10px;
  height: 75px;
`;

export const Logo = styled(Link)`
  color: black;
  text-decoration: none;
  margin: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
`

export const MenuLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin: 1rem;
  font-size: 1.5rem;
`;

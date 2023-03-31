import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15rem;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export const LoginInput = styled.input`
  height: 3rem;
  font-size: 2rem;
  width: 20rem;
  border-radius: 5px;
  margin: 0.4rem;
`;

export const LoginButton = styled.button`
  height: 3rem;
  font-size: 2rem;
  width: 6rem;
  border-radius: 5px;
  background-color: #fafffe;
  color: #7edbff;
  border-color: #7edbff;
  margin-top: 15px;
  margin-left: 6px;
  :hover {
    cursor: pointer;
  }
`;

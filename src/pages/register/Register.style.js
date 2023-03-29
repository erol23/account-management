import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15rem;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RegisterInput = styled.input`
  height: 3rem;
  font-size: 2rem;
  width: 20rem;
  border-radius: 5px;
  margin: 0.4rem;
`;

export const RegisterButton = styled.button`
  height: 3rem;
  font-size: 2rem;
  width: 20rem;
  border-radius: 5px;
  background-color: #77F900;
  :hover{
    cursor: pointer;
  }
`;

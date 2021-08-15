import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Form = styled.form`
  padding: 16px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  border: 2px solid #ccc;
  border-radius: 3px;
  padding: 12px 6px;
  display: block;
  width: 90%;
  font-size: 16px;
  margin-bottom: 25px;
  @media (max-height: 620px) {
    margin-top: 5px;
    height: 40px;
    font-size: 14px;
    padding: 10px 5px;
    margin-bottom: 15px;
  }

  /* &[disabled] {
    opacity: 0.3;
  } */
`;

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 75%;
  text-align: center;
  &:hover{
    background: purple;
  }

  /* &[disabled] {
    opacity: 0.3;
  } */
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  padding: 8px 0;
  text-align: center;
  color: #232327;
  margin-bottom: 20px;
  
`;

export const Error = styled.p`
  color: red;
  font-size: 14px;
  
  width: 100%;
  margin-left: 27.5px;
`;

export const Sesion = styled.p`
  font-size: 15px;
  text-align: center;
  margin-top: 10px;
`

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: #ff8c00;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;
  &:hover {
    color: black;
  }
`;

// Este es un espinne to wapo para cuando este cargando
export const Spinner = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  border: 3px solid rgba(0, 0, 0, 0.1);
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border-left-color: #09f;
  margin: auto;
  animation: spin 1s ease infinite;
  
`;


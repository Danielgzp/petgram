import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Form = styled.form`
  padding: 16px 0;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;

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
  width: 100%;
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
  font-weight: 500;
  padding: 8px 0;
`;

export const Error = styled.span`
  color: red;
  font-size: 14px;
`;

export const Sesion = styled.h2`
  font-size: 14px;
`

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: #8d00ff;
  font-size: 16px;
  &:hover {
    color: purple;
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

import styled from "styled-components";

export const Button = styled.button`
  background: linear-gradient(to left, #b500b5, #ff8c00);
  border-radius: 5px;
  color: #fff;
  height: 46px;
  display: block;
  width: 90%;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-top: 25px;
  cursor: pointer;
  &[disabled] {
    opacity: 0.3;
  }
`;

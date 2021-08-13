import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  margin-left: 10px;
  & svg {
    margin-right: 4px;
    ${(props) =>
      props.liked &&
      css`
         {
          ${fadeIn()}
          color: red;
        }
      `}
  }
`;

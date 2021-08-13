import styled, { css } from "styled-components";

import { fadeIn } from "../../styles/animations";

export const List = styled.ul`
  display: flex;
  
  background-color: rgb(245, 245, 245);
  overflow-x: scroll;
  z-index: 10;
  width: 100%;
  padding: 10px 10px;
  border-bottom: 1px solid #e8e8e8;
  border-top: 1px solid #e8e8e8;
  ${(props) =>
    props.fixed &&
    css`
       {
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(0.5);
        z-index: 1;
        ${fadeIn()}
      }
    `}/* Esto sirve para ocultar el scroll*/
  /* &::-webkit-scrollbar {
    display: none;
  } */
`;

export const Item = styled.li`
  padding: 0 8px;
`;

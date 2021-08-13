import styled from "styled-components";
import { css } from "styled-components";

import { fadeIn } from "../../styles/animations";

export const Article = styled.article`
  min-height: 200px;
`;

export const ImgWrapper = styled.div`
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`;

export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const User = styled.span`
  padding: 10px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin-top: 10px;
`;

export const UserImage = styled.div`
  border-radius: 50%;
  background: linear-gradient(to left, #b500b5, #ff8c00);
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;


// ${(props) =>
//     props.isOver &&
//     css`
//       color: red;
//     `}
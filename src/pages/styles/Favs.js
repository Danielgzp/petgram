import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Container = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Image = styled.img`
  width: 90px;
  margin: 0 auto;
`;

export const Link = styled(LinkRouter)`
  color: #ff8c00;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;
  &:hover {
    color: black;
  }
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  padding-bottom: 4px;
  text-align: center;
  margin-top: 10px;
`;

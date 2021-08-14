import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Link = styled(LinkRouter)`
  /* // border-radius: 8px; */
  /* box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  display: inline-block;
  overflow: hidden;
  position: relative;
  width: 31.33%;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  } */
  /* border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  position: relative;
  width: 31.33%; */
  display: block;
  position: relative;
  width: 100%;
  max-width: 300px;
  height: 0px;
  padding-bottom: 100%;
  overflow: hidden;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export const NoFavorites = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoFavoritesText = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const Grid = styled.ul`
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  margin-top: 20px;
`;

export const Item = styled.li`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  position: absolute;
  inset: 0px;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
`;

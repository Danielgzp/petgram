import React from "react";
import PropTypes from "prop-types";
import { Grid, Image, Link } from "./styles";

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <div>
      <Grid>
        {favs.map((fav) => (
          <li key={fav.id}>
            <Link to={`/detail/${fav.id}`}>
              <Image src={fav.src} />
            </Link>
          </li>
        ))}
      </Grid>
    </div>
  );
};

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired, // isRequired: sirve para obligar a que le llegue algun tipo de valor a traves de esa prop y no quede undefined
    })
  ),
};

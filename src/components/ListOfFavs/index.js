import React from "react";
import PropTypes from "prop-types";
import { Grid, Image, Link, NoFavorites, NoFavoritesText } from "./styles";

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <div>
      {favs < 1 ? (
        <NoFavorites>
          <NoFavoritesText>Aún no tienes ninguna foto agregada a tus favoritos 😅</NoFavoritesText>
        </NoFavorites>
      ) : (
        <Grid>
          {favs.map((fav) => (
            <li key={fav.id}>
              <Link to={`/detail/${fav.id}`}>
                <Image src={fav.src} />
              </Link>
            </li>
          ))}
        </Grid>
      )}
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

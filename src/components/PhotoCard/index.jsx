import React from "react";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

import { ImgWrapper, Img, Button, Article, User, UserImage } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";
import { useLikePhoto } from "../../hoc/ToggleLikeMutation";
import { useAuthContext } from "../../hooks/Context";
import Swal from "sweetalert2";

//import { useHover } from "../../hooks/useHover";

const DEFAULT_IMAGE =
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({
    id,
    likes = 0,
    liked = false,
    src = DEFAULT_IMAGE,
    user
}) => {
    const [show, element] = useNearScreen();
    const { isAuth } = useAuthContext();
    //const key = `like-${id}`;
    //const [liked, setLiked] = useLocalStorage(key, false);
    // //const [over, setOver] = useHover();

    const [toggleLike] = useLikePhoto();

    // const handleFavButtonClick = () => {
    //     console.log(`id de la photo ${id}`);
    //     setLiked(!liked);
    //     toggleLike({ variables: { input: { id: id } } });
    // };

    const handleFavButtonClick = () => {
        if (!isAuth) {
            Swal.fire("Primero debes iniciar sesion");
        } else {
            toggleLike({
                variables: {
                    input: { id },
                },
            });
            liked = true
        }
    };

    return (
        <Article ref={element}>
            {show && (
                <React.Fragment>
                    <User>
                        <UserImage></UserImage>
                        <span>usuario_123</span>
                    </User>
                    <Link to={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </Link>

                    <FavButton
                        liked={liked}
                        likes={likes}
                        onClick={handleFavButtonClick}
                    />
                </React.Fragment>
            )}
        </Article>
    );
};

PhotoCard.propTypes = {
    id: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
    likes: function (props, propName, componentName) {
        const propValue = props[propName];

        if (propValue === undefined) {
            return new Error(`${propName} value must be defined`);
        }

        if (propValue < 0) {
            return new Error(`${propName} value must be greater than 0`);
        }
    },
};

import React from "react";

import { ImgWrapper, Img, Button, Article } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";
import { useLikePhoto } from "../../hoc/ToggleLikeMutation";
//import { useHover } from "../../hooks/useHover";

const DEFAULT_IMAGE =
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
    const [show, element] = useNearScreen();
    const key = `like-${id}`;
    const [liked, setLiked] = useLocalStorage(key, false);
    //const [over, setOver] = useHover();

    const [toggleLike] = useLikePhoto();
    const handleFavButtonClick = () => {
        console.log(`id de la photo ${id}`);
        setLiked(!liked);
        toggleLike({ variables: { input: { id: id } } });
    };

    return (
        <Article ref={element}>
            {show && (
                <React.Fragment>
                    <a href={`/?detail=${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </a>

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

import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from "./styles";

export const FavButton = ({ liked, likes, onClick }) => {
    const Icon = liked ? MdFavorite : MdFavoriteBorder;
    return (
        <Button
            type="button"
            //liked={liked}
            onClick={onClick}
            //onMouseEnter={() => setOver(true)}
            //onMouseLeave={() => setOver()}
            //isOver={over}
        >
            <Icon size="32px" /> {likes} likes!
        </Button>
    );
};
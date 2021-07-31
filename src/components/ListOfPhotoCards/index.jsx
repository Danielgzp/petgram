import React from "react";

import { PhotoCard } from "../PhotoCard";
import { photos } from '../../../api/db.json'

export const ListOfPhotoCards = () => {
    return (
        <ul>
            {photos.map((photo) => (
                <PhotoCard key={photo.id} {...photo} id={photo.id} />
            ))}
            {/* {[1, 2, 3, 4, 5, 6, 7].map((id) => (
                <PhotoCard key={id} id={id}  />
            ))} */}
        </ul>
    );
};

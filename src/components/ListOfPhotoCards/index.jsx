//DEPENDENCIES
import React from "react";
import { useQuery, gql} from "@apollo/client";


//COMPONENTS
import { PhotoCard } from "../PhotoCard";

const whitPhotos = gql`
    query getPhotos {
        photos {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`;

export const ListOfPhotoCards = () => {
    const { loading, error, data } = useQuery(whitPhotos);

    if (error) {
        return <h2>Internal Server Error</h2>;
    }
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <ul>
            {data.photos.map((photo) => (
                <PhotoCard key={photo.id} {...photo} />
            ))}
            {/* {[1, 2, 3, 4, 5, 6, 7].map((id) => (
                <PhotoCard key={id} id={id}  />
            ))} */}
        </ul>
    );
};

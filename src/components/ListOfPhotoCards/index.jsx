//DEPENDENCIES
import React from "react";
import { useQuery, gql} from "@apollo/client";

//COMPONENTS
import { PhotoCard } from "../PhotoCard";
import { Spinner } from "../../containers/styles/styles";

const whitPhotos = gql`
    query getPhotos($categoryId: ID) {
        photos(categoryId: $categoryId) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`;

export const ListOfPhotoCards = ({ categoryId }) => {
    const { loading, error, data } = useQuery(whitPhotos, {
        variables: { categoryId }, //TODO: Enviar dinamicamente
    });

    if (error) {
        return <h2>Internal Server Error</h2>;
    }
    if (loading) {
        return <Spinner></Spinner>;
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

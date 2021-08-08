import React from "react";

import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { Layout } from "../components/Layout";

// export const Home = ({ categoryId }) => {
//     return (
//         <Layout
//             title="Tu app de fotos de mascotas"
//             subtitle="Con Petgram puedes encontrar fotos de animales domésticos muy bonitos"
//         >
//             <ListOfCategories />
//             <ListOfPhotoCards categoryId={categoryId} />
//         </Layout>
//     );
// };

const HomePage = ({ categoryId }) => {
    return (
        <Layout
            title="Tu app de fotos de mascotas"
            subtitle="Con Petgram puedes encontrar fotos de animales domésticos muy bonitos"
        >
            <ListOfCategories />
            <ListOfPhotoCards categoryId={categoryId} />
        </Layout>
    );
};

export const Home = React.memo(HomePage, (prevProps, props) => {
    return prevProps.categoryId === props.categoryId;
});
import React from "react";

import { GlobalStyle } from "../styles/GlobalStyles";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { Logo } from "../components/Logo";
import { PhotoCardWithQuery } from "../hoc/PhotoCardsWithQuery";

export const App = () => {
    const urlParams = new window.URLSearchParams(window.location.search);
    const detailId = urlParams.get("detail");

    return (
        <div>
            <GlobalStyle />
            <Logo />
            {detailId ? (
                <PhotoCardWithQuery id={detailId} />
            ) : (
                <>
                    <ListOfCategories />
                    <ListOfPhotoCards categoryId={1} />
                </>
            )}
        </div>
    );
};

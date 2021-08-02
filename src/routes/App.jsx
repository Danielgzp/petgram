import React from "react";

// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Router } from "@reach/router";

import { GlobalStyle } from "../styles/GlobalStyles";
// import { ListOfCategories } from "../components/ListOfCategories";
// import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { Logo } from "../components/Logo";
import { PhotoCardWithQuery } from "../hoc/PhotoCardsWithQuery";
import { Home } from "../pages/Home";

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
                <Router>
                    <Home path="/" />
                    <Home path="/pet/:categoryId" />
                </Router>
            )}
        </div>
    );
};

{/* <BrowserRouter>
    <GlobalStyle />
    <Logo />
    <Switch>
        {detailId ? (
            <Route
                exact
                path="/"
                render={() => <PhotoCardWithQuery id={detailId} />}
            />
        ) : (
            <>
                <Route exact path="/" render={(props) => <Home {...props} />} />
                <Route
                    exact
                    path="/pet/:categoryId"
                    render={(props) => <Home {...props} />}
                />
            </>
        )}
    </Switch>
</BrowserRouter>; */}
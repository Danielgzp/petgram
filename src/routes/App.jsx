import React from "react";

// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Router } from "@reach/router";

import { GlobalStyle } from "../styles/GlobalStyles";
// import { ListOfCategories } from "../components/ListOfCategories";
// import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { Logo } from "../components/Logo";
import { Home } from "../pages/Home";
import { Detail } from "../pages/Details";
import { NavBar } from "../components/NavBar";
import { Favs } from "../pages/Favs";
import { User } from "../pages/User";
import { NotRegisteredUser } from "../pages/NotRegisteredUser";

import Context from "../Context";

const UserLogged = ({ children }) => {
    return children({ isAuth: false });
};

export const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Logo />

            <Router>
                <Home path="/" />
                <Home path="/pet/:categoryId" />
                <Detail exact path="/detail/:detailId" />
            </Router>

            <Context.Consumer>
                {({ isAuth }) =>
                    isAuth ? (
                        <Router>
                            <Favs path="/favs" />
                            <User path="/user" />
                        </Router>
                    ) : (
                        <Router>
                            <NotRegisteredUser path="/favs" />
                            <NotRegisteredUser path="/user" />
                            {/* <NotRegisteredUser default path="/register" /> */}
                        </Router>
                    )
                }
            </Context.Consumer>

            <NavBar />
        </div>
    );
};

{
    /* <BrowserRouter>
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
</BrowserRouter>; */
}

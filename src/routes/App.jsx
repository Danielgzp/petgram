import React from "react";
import { Router, Redirect } from "@reach/router";

import { GlobalStyle } from "../styles/GlobalStyles";

import { Logo } from "../components/Logo";
import { Home } from "../pages/Home";
import { Detail } from "../pages/Details";
import { NavBar } from "../components/NavBar";
import { Favs } from "../pages/Favs";
import { User } from "../pages/User";
import { Login } from "../pages/Login";
import { RegisterUser } from "../pages/RegisterUser";
import { NotFound } from "../pages/NotFound";
import { useAuthContext } from "../hooks/Context";

export const App = () => {
    const { isAuth, isRegister } = useAuthContext();
    
    return (
        <>
            <GlobalStyle />
            <Logo />

            <Router>
                <Home path="/" />
                <Home path="/pet/:categoryId" />
                <Detail exact path="/detail/:detailId" />
                {!isAuth && <Login path="/sesion" />}
                {/* {!isAuth && <Redirect from="/favs" to="/sesion" />} */}
                {!isAuth && <Redirect from="/user" to="/sesion" />}
                {isAuth && <Redirect from="/sesion" to="/" />}
                {isRegister && (
                    <Redirect from="/sesion/register" to="/sesion" />
                )}
                <Favs path="/favs" />
                <User path="/user" />
                <RegisterUser
                    exact
                    path="/sesion/register"
                    component={RegisterUser}
                />
                <NotFound default />
            </Router>
            
            {/* <>
                {isAuth ? (
                    <Router>
                        <Favs path="/favs" />
                        <User path="/user" />
                    </Router>
                ) : (
                    <Router>
                        <Favs path="/favs" />
                        <Login path="/user" />
                        // <NotRegisteredUser default path="/register" /> 
                    </Router>
                )}
            </>  */}

            <NavBar />
        </>
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

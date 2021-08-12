import React from "react";
import { Link, Nav } from "./styles";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";

import { useAuthContext } from "../../hooks/Context";

const SIZE = "32px";

export const NavBar = () => {
    const { isAuth } = useAuthContext();
    return (
        <Nav>
            <Link to="/">
                <MdHome size={SIZE} />
            </Link>
            <Link to="/favs">
                <MdFavoriteBorder size={SIZE} />
            </Link>
            {isAuth ? (
                <Link to="/user">
                    <MdPersonOutline size={SIZE} />
                </Link>
            ) : (
                <Link to="/sesion">
                    <MdPersonOutline size={SIZE} />
                </Link>
            )}
            
            {/* <Link to="/user">
                // <MdPersonOutline size={SIZE} />
                //{" "}
            </Link> */}
        </Nav>
    );
};

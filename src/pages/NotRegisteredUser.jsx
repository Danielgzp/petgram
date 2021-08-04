import React, { useContext } from "react";

import { useAuthContext } from "../hooks/Context";

export const NotRegisteredUser = () => {
    const { activateUser } = useAuthContext();

    return (
        <form onSubmit={activateUser}>
            <button>Iniciar sesión</button>
        </form>
    );
};

import React from "react";
import { useAuthContext } from "../hooks/Context";
import { SubmitButton } from "../components/SubmitButton";
import { Container } from "./styles/User";

export const User = () => {
    const { removeUser } = useAuthContext();
    return (
        <>
            <Container>
                <h1>User</h1>
                <SubmitButton onClick={removeUser}>Cerrar sesión</SubmitButton>
            </Container>
        </>
    );
};

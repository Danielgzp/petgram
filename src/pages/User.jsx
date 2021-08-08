import React from 'react'
import { useAuthContext } from '../hooks/Context';
import { SubmitButton } from "../components/SubmitButton";

export const User = () => {
    const { removeUser } = useAuthContext()
    return (
        <>
            <h1>User</h1>
            <SubmitButton onClick={removeUser}>Cerrar sesión</SubmitButton>
        </>
    );
};

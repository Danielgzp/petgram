import React, { useState } from "react";
import Swal from "sweetalert2";
import styled from "styled-components";

import { useAuthContext } from "../hooks/Context";
import { UserForm } from "../components/UserForm";
import { useLoginMutation } from "../containers/useLoginMutation";
import { useRegisterMutation } from "../containers/useRegisterMutation";

const PetLogo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`
const Image = styled.img`
    width: 100px;
`

export const Login = () => {
    const { activateUser } = useAuthContext();
    const { loginMutation } = useLoginMutation();
    const [state, setState] = useState({
        loading: false,
        error: null,
    });
    
    const errorMsg =
        state.error && "La contraseña no es correcta o el usuario no existe";
    //     Swal.fire("La contraseña no es correcta o el usuario no existe");


    const onSubmit = async ({ email, password }) => {
        const input = { email, password };
        const variables = { input };
        setState({ loading: true, error: null });
        try {
            await loginMutation({ variables }).then(({ data }) => {
                const { login } = data;
                activateUser(login);
            });
            setState({ loading: false, error: null });
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            setState({ loading: false, error: error });
        }
    };

    return (
        <>
            <PetLogo>
                <Image src="https://i.imgur.com/2EljbYZ.png" alt="Pet Logo" />
            </PetLogo>
            <UserForm
                disabled={state.loading}
                title="Iniciar Sesión con tu cuenta de Petgram 😉"
                onSubmit={onSubmit}
                error={errorMsg}
                path="/sesion/register"
                name="¿Aún no tienes una cuenta?"
                register=" Regístrate"
                buttonTitle="Iniciar Sesion"
            />
        </>

        // <h1>NotLoginedUser</h1>
    );
};

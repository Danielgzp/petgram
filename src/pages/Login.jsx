import React, { useState } from "react";
import Swal from "sweetalert2";
import styled from "styled-components";

import { useAuthContext } from "../hooks/Context";
import { UserForm } from "../components/UserForm";
import { useLoginMutation } from "../containers/useLoginMutation";
import { useRegisterMutation } from "../containers/useRegisterMutation";

import petLogo from "../assets/images/pet.png";

const PetLogo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;
const Image = styled.img`
    width: 100px;
    @media (max-height: 620px) {
        width: 80px;
    }
`;

export const Login = () => {
    const { activateUser, activateRegister } = useAuthContext();
    const { loginMutation } = useLoginMutation();
    const [state, setState] = useState({
        loading: false,
        error: null,
    });
    activateRegister(false)

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
                icon: "success",
                title: "Has ingresado correctamente",
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
                <Image src={petLogo} alt="Pet Logo" />
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

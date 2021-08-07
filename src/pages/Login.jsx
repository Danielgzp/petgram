

import React, { useState } from "react";
import Swal from "sweetalert2";

import { useAuthContext } from "../hooks/Context";
import { UserForm } from "../components/UserForm";
import { useLoginMutation } from "../containers/useLoginMutation";


export const Login = () => {
    const { activateUser } = useAuthContext();
    const { loginMutation } = useLoginMutation();
    const [state, setState] = useState({
        loading: false,
        error: null,
    });

    const errorMsg =
        state.error &&
        "La contraseña no es correcta o el usuario no existe";

    const onSubmit = async ({ email, password }) => {
        const input = { email, password };
        const variables = { input };
        setState({ loading: true, error: null });
        try {
            await loginMutation({ variables }).then(({ data }) => {
              const { login } = data
              activateUser(login)
            })
            setState({ loading: false, error: null });
        } catch (error) {
            setState({ loading: false, error: error });
        }

        window.location.href = "/";
    };

    return (
        <>
            <UserForm
                disabled={state.loading}
                onSubmit={onSubmit}
                title="Iniciar Sesion"
                error={errorMsg}
                path="/user/register"
                name="¿Aún no tienes una cuenta?"
                register=" Regístrate"
            />
        </>

        // <h1>NotLoginedUser</h1>
    );
};
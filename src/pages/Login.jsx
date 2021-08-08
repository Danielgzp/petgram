import React, { useState } from "react";
import Swal from "sweetalert2";

import { useAuthContext } from "../hooks/Context";
import { UserForm } from "../components/UserForm";
import { useLoginMutation } from "../containers/useLoginMutation";
import { useRegisterMutation } from "../containers/useRegisterMutation";

export const Login = () => {
    const { activateUser } = useAuthContext();
    const { registerMutation } = useRegisterMutation();
    const { loginMutation } = useLoginMutation();
    const [state, setState] = useState({
        loading: false,
        error: null,
    });
    const [stateRegister, setStateRegister] = useState({
        loading: false,
        error: null,
    });

    const errorMsg =
        state.error && "La contraseña no es correcta o el usuario no existe";

    const errorMsgRegister =
        state.error && 'AAAAAAAAAAAAA'
        // Swal.fire({
        //     icon: "error",
        //     title: "El usuario ya existe o hay algún problema.",
        //     text: "Something went wrong!",
        //     //footer: '<a href="">Why do I have this issue?</a>',
        // });

    const onRegister = async ({ email, password }) => {
        const input = { email, password };
        const variables = { input };
        setStateRegister({ loading: true, error: null });
        try {
            await registerMutation({ variables }).then(({ data }) => {
                console.log(data)
                const { signup } = data;
                console.log(signup)
            });
            setStateRegister({ loading: false, error: null });
        } catch (error) {
            setStateRegister({ loading: false, error: error });
        }

        // window.location.href = "/sesion";
    };

    const onSubmit = async ({ email, password }) => {
        const input = { email, password };
        const variables = { input };
        setState({ loading: true, error: null });
        try {
            await loginMutation({ variables }).then(({ data }) => {
                console.log(data);
                const { login } = data;
                activateUser(login);
                console.log(login)
            });
            setState({ loading: false, error: null });
        } catch (error) {
            setState({ loading: false, error: error });
        }

        // window.location.href = "/";
    };

    return (
        <>
            <UserForm
                disabled={stateRegister.loading}
                onSubmit={onRegister}
                title="Regístrate"
                error={errorMsgRegister}
            />
            <UserForm
                disabled={state.loading}
                onSubmit={onSubmit}
                title="Iniciar Sesion"
                error={errorMsg}
                // path="/user/register"
                name="¿Aún no tienes una cuenta?"
                register=" Regístrate"
            />
        </>

        // <h1>NotLoginedUser</h1>
    );
};

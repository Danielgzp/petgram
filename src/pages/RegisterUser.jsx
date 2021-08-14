import React, { useState } from "react";

import Swal from "sweetalert2";

import { useAuthContext } from "../hooks/Context";
import { UserForm } from "../components/UserForm";
import { useRegisterMutation } from "../containers/useRegisterMutation";

export const RegisterUser = () => {
    const { activateUser } = useAuthContext();
    const { registerMutation } = useRegisterMutation();
    const [state, setState] = useState({
        loading: false,
        error: null,
    });

    const errorMsgRegister =
        state.error &&
        "El usuario ya esta registrado o ha ocurrido algun problema";

    //Swal.fire("La contraseña no es correcta o el usuario no existe");
    //     icon: "error",
    //     title: "El usuario ya existe o hay algún problema.",
    //     //footer: '<a href="">Why do I have this issue?</a>',
    // });

    const onRegister = async ({ email, password }) => {
        const input = { email, password };
        const variables = { input };
        setState({ loading: true, error: null });
        try {
            await registerMutation({ variables }).then(({ data }) => {
                const { signup } = data;
            });

            setState({ loading: false, error: null });

            // Swal.fire({
            //     icon: "success",
            //     text: "Usuario registrado exitosamente!",
            //     html: '<a href="/sesion">Iniciar Sesion</a>',
            //     //showCloseButton: true,
            //     //showCancelButton: true,
            //     showConfirmButton: false,
            //     //confirmButtonAriaLabel: "a",
            //     //focusConfirm: false,
            // });
            // Swal.fire({
            //     icon: "sucess",
            //     text: "Usuario registrado con exito",
            // });
            Swal.fire({
                icon: "success",
                title: "Usuario registrado con exito",
                showConfirmButton: false,
                timer: 1500,
                
            });
            //setTimeout(() => (window.location.href = "/sesion"), 1500);
            
        } catch (error) {
            setState({ loading: false, error: error });
        }
    };

    return (
        <>
            <UserForm
                disabled={state.loading}
                onSubmit={onRegister}
                title="Regístrate"
                error={errorMsgRegister}
                buttonTitle="Registrar"
            />
        </>

        // <h1>NotLoginedUser</h1>
    );
};

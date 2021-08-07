import React, { useState } from "react";
import Swal from "sweetalert2";

import { useAuthContext } from "../hooks/Context";
import { UserForm } from "../components/UserForm";
import { useRegisterMutation } from "../containers/useRegisterMutation";


export const RegisterUser = (props) => {
    console.log(props)
    const { activateUser } = useAuthContext();
    const { registerMutation } = useRegisterMutation();
    const [state, setState] = useState({
        loading: false,
        error: null,
    });

    const errorMsgRegister =
        state.error &&
        Swal.fire({
            icon: "error",
            title: "El usuario ya existe o hay algún problema.",
            text: "Something went wrong!",
            //footer: '<a href="">Why do I have this issue?</a>',
        });

    const onRegister = async ({ email, password }) => {
        const input = { email, password };
        const variables = { input };
        setState({ loading: true, error: null });
        try {
            await registerMutation({ variables }).then(({ data }) => {
                const { signup } = data;
                activateUser(signup);
            });
            setState({ loading: false, error: null });
        } catch (error) {
            setState({ loading: false, error: error });
        }

        window.location.href = '/sesion'
        
    };

    return (
        <>
            <UserForm
                disabled={state.loading}
                onSubmit={onRegister}
                title="Regístrate"
                error={errorMsgRegister}
            />
        </>

        // <h1>NotLoginedUser</h1>
    );
};

//     return (
//         <>
//             <UserForm title="Registrarse" onSubmit={activateAuth} />
//             <UserForm title="Iniciar sesión" onSubmit={activateAuth} />
//         </>
//     );
// };

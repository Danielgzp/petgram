import React, { useState } from "react";

import { useAuthContext } from "../hooks/Context";
import { UserForm } from "../components/UserForm";
import { useRegisterMutation } from "../containers/useRegisterMutation";
import { useLoginMutation } from "../containers/useLoginMutation";

export const NotRegisteredUser = () => {
    const { activateUser } = useAuthContext();
    const { registerMutation } = useRegisterMutation();
    const { loginMutation } = useLoginMutation();
    const [ state, setState] = useState({
        loading: false, 
        error: null
    })

    const errorMsg =
        state.error && "El usuario ya existe o hay algún problema.";
        const errorMsgLogin =
            state.error && "La contraseña es incorrecta o el usuario no existe.";

    const onSubmit = async ({ email, password }) => {
        const input = { email, password };
        const variables = { input };
        setState({loading: true, error: null})
        try{
            await registerMutation({ variables });
            setState({loading: false, error: null})
        }catch(error){
            setState({loading: false, error: error})
        }
    };

    const onLogin = async ({ email, password }) => {
        const input = { email, password };
        const variables = { input };
        setState({ loading: true, error: null });
        try {
            await loginMutation({ variables }).then(activateUser);
            setState({ loading: false, error: null });
        } catch (error) {
            setState({ loading: false, error: error });
        }
    };


    return (
        <>
            <UserForm
                disabled={state.loading}
                onSubmit={onSubmit}
                title="Registrarse"
                error={errorMsg}
            />
            <UserForm
                disabled={state.loading}
                onSubmit={onLogin}
                title="Iniciar Sesion"
                error={errorMsgLogin}
            />
        </>

        // <h1>NotRegisteredUser</h1>
    );
};

//     return (
//         <>
//             <UserForm title="Registrarse" onSubmit={activateUser} />
//             <UserForm title="Iniciar sesión" onSubmit={activateUser} />
//         </>
//     );
// };

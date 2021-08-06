import React, { useState } from "react";

import { useAuthContext } from "../hooks/Context";
import { UserForm } from "../components/UserForm";
import { useRegisterMutation } from "../containers/useRegisterMutation";

export const NotRegisteredUser = () => {
    const { activateUser } = useAuthContext();
    const { registerMutation } = useRegisterMutation();
    const [ state, setState] = useState({
        loading: false, 
        error: null
    })

    const errorMsg =
        state.error && "El usuario ya existe o hay algún problema.";

    const onSubmit = async ({ email, password }) => {
        const input = { email, password };
        const variables = { input };
        setState({loading: true, error: null})
        try{
            await registerMutation({ variables }).then(activateUser);
            setState({loading: false, error: null})
        }catch(error){
            setState({loading: false, error: error})
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
                onSubmit={activateUser}
                title="Iniciar Sesion"
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

import React, { useContext, useState } from "react";

import Swal from "sweetalert2";

const AuthContext = React.createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [isRegister, setIsRegister] = useState(false)

  function activateUser(token) {
    setIsAuth(true);
    window.sessionStorage.setItem("token", token);
  }

  function activateRegister(register) {
    setIsRegister(register)
  }

  const value = {
    isAuth,
    isRegister,
    activateUser,
    activateRegister,
    removeUser: () => {
      setIsAuth(false);
      window.sessionStorage.removeItem("token");
      __APOLLO_CLIENT__.resetStore();
      Swal.fire({
        icon: "warning",
        text: "Has cerrado la sesion!",
      });
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// import React, { createContext, useState } from "react";

// export const Context = createContext();

// const Provider = ({ children }) => {
//   const [isAuth, setIsAuth] = useState(() => {
//     return window.sessionStorage.getItem("token");
//   });

//   const value = {
//     isAuth,
//     activateAuth: (token) => {
//       setIsAuth(true);
//       window.sessionStorage.setItem("token", token);
//     },
//   };

//   return <Context.Provider value={value}>{children}</Context.Provider>;
// };

// export default {
//   Provider,
//   Consumer: Context.Consumer,
// };

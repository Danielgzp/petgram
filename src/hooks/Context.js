import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  function activateUser(token) {
    setIsAuth(true);
    window.sessionStorage.setItem("token", token);
  }

  const value = {
    isAuth,
    activateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

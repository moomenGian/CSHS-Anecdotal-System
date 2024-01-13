import { createContext, useContext } from "react";

export const AuthContext = createContext("the value i get")

export function useAuthContext() {
    return useContext(AuthContext)
}

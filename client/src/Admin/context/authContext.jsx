import { createContext, useContext, useEffect } from "react";
import { AuthorizationHeader, axioAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const navigate = useNavigate();
    const getToken = () => {
        const token = localStorage.getItem("access_token");
        return token;
    };

    const handelAuth = async () => {
        const token = getToken();
        if (!token) {
            localStorage.removeItem("access_token");
            navigate("/sign-in");
        }
        AuthorizationHeader(token);
        try {
            const data = await axioAuth.get("users/admin");
            if (data.status === 200) {
                localStorage.setItem(
                    "user",
                    JSON.stringify(data?.data?.profile)
                );
            }
        } catch (error) {
            localStorage.removeItem("user");
            localStorage.removeItem("access_token");
            AuthorizationHeader();
            navigate("/sign-in");
        }
    };

    handelAuth();
    return (
        <AuthContext.Provider value={{ id: 1 }}>
            {children}
        </AuthContext.Provider>
    );
}

export const UseAuthContext = () => useContext(AuthContext);

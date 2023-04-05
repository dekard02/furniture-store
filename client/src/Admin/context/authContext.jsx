import { createContext, useContext, useEffect, useState } from "react";
import { AuthorizationHeader, axioAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const getToken = () => {
    const token = localStorage.getItem("access_token");
    return token;
  };

  const handleAuth = async () => {
    const token = getToken();
    console.log(token);
    if (!token) {
      console.log("call");
      localStorage.removeItem("access_token");
      navigate("/sign-in");
    }
    AuthorizationHeader(token);
    try {
      const data = await axioAuth.get("users/admin");
      if (data.status === 200) {
        localStorage.setItem("user", JSON.stringify(data?.data?.profile));
      }
    } catch (error) {
      console.log("error", error);
      localStorage.removeItem("user");
      localStorage.removeItem("access_token");
      AuthorizationHeader();
      navigate("/sign-in");
    }
  };

  handleAuth();
  return (
    <AuthContext.Provider value={{ id: 1 }}>{children}</AuthContext.Provider>
  );
}

export const UseAuthContext = () => useContext(AuthContext);

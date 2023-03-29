import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { axioAuth } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const getToken = () => {
    const token = localStorage.getItem("token");
    return token;
  };

  const handelAuth = async () => {
    const token = getToken();
    axioAuth.defaults.headers.common["Authorization"] =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTNjNTU1YzZiOWU1ZGQ1ZjU4MDNkMCIsImlhdCI6MTY3OTUzMzczOSwiZXhwIjoxNjg3MzA5NzM5fQ.Eza2wRh5MBPTA7sPXc8WN3Nc4X6zdwgv_SwRZUI-nmQ";
    try {
      const data = await axioAuth.get("users/admin");
    } catch (error) {
      navigate("/sign-in");
    }
  };
  useEffect(() => {
    handelAuth();
  }, []);
  return (
    <AuthContext.Provider value={{ id: 1 }}>{children}</AuthContext.Provider>
  );
}

export const UseAuthContext = () => useContext(AuthContext);

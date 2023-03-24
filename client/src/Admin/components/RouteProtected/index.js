import React, { Fragment, useState } from "react";
import { Route, Navigate } from "react-router-dom";

export default function RouteProtected({ children }) {
    const [auth, seAuth] = useState(true);
    const [role, setRole] = useState("Admin");
    return auth ? <>{children}</> : <Navigate to="/sign-in" />;
}

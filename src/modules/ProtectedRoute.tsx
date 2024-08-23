import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useDataContext } from "../context/UseDataContext";

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useDataContext();
  console.log("protect", isAuthenticated);

  if (isAuthenticated) {
    console.log("Accessing protected route");
    return <Outlet />;
  } else {
    console.log("Redirecting to login");
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;

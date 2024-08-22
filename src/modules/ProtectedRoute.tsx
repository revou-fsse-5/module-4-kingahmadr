import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../components/context/UseAuthContext";

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAuthContext();
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

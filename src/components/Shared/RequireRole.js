import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequireRole = ({ children }) => {
  const { role } = useSelector((state) => state.setUserRole);
  const location = useLocation();

  if (!role) {
    return (
      <Navigate to="/welcome" state={{ from: location }} replace></Navigate>
    );
  }

  return children;
};

export default RequireRole;

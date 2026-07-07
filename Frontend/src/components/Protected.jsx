import { useAdminAuth } from "../hooks/useAdminAuth";
import React from "react";
import { Navigate } from "react-router";

const Protected = ({ children }) => {
  const { loading, admin } = useAdminAuth();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-(--primaryBackground)">
        <div className="rounded-full h-20 w-20 bg-(--primary) animate-ping"></div>
      </div>
    );
  }

  if (!admin) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default Protected;
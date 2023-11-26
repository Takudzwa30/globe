import React from "react";

// Libraries
import { Outlet } from "react-router-dom";

// Styles
import Style from "./AuthLayout.module.css";

const AuthLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default AuthLayout;

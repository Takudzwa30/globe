import React from "react";

// Libraries
import { Outlet } from "react-router-dom";
import { Container } from "@hybris-software/ui-kit";

// Components
import AuthImageSlider from "../../Components/ui/authImageSlider/AuthImageSlider";

// Styles
import Style from "./AuthLayout.module.css";

const AuthLayout = () => {
  return (
    <Container>
      <main className={Style.main}>
        <div className={Style.slider}>
          <AuthImageSlider />
        </div>
        <div className={Style.content}>
          <Outlet />
        </div>
      </main>
    </Container>
  );
};

export default AuthLayout;

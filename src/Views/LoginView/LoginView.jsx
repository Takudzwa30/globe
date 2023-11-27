import React from "react";

// Styles
import Style from "./LoginView.module.css";
import AuthHeading from "../../Components/ui/authHeading/AuthHeading";

const LoginView = () => {
  return (
    <>
      <AuthHeading
        pageTitle={"Login"}
        subTitle="Login to access your Golobe account"
      />
    </>
  );
};

export default LoginView;

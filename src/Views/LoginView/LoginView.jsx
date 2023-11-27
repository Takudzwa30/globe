import React, { useState } from "react";

// Libraries
import useForm from "@hybris-software/use-ful-form";
import { Link } from "react-router-dom";

// Paths
import { paths } from "../../Routes/routes";

// Components
import AuthHeading from "../../Components/ui/authHeading/AuthHeading";
import SimpleInput from "../../Components/ui/simpleInput/SimpleInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CheckComponent from "../../Components/ui/checkComponent/CheckComponent";
import ThirdPartyLogin from "../../Components/ui/thirdPartyLogin/ThirdPartyLogin";
import ToolTip from "../../Components/ui/toolTip/ToolTip";

// Styles
import Style from "./LoginView.module.css";

const LoginView = () => {
  const form = useForm({
    inputs: {
      email: {
        required: true,
        nature: "email",
      },
      password: {
        required: true,
        // nature: "password",
      },
    },
  });
  return (
    <>
      <AuthHeading
        pageTitle={"Login"}
        subTitle="Login to access your Golobe account"
      />
      <div className={Style.form}>
        <SimpleInput
          label="Email"
          placeholder="Your email address"
          {...form.getInputProps("email")}
        />
        <SimpleInput
          label="Password"
          placeholder="Your password"
          type="password"
          {...form.getInputProps("password")}
        />
      </div>
      <div className={Style.links}>
        <CheckComponent value="Remember me" />
        <ToolTip>
          <Link
            className={Style.link}
            // to={paths.auth.forgotPassword}
            to=""
          >
            Forgot Password
          </Link>
        </ToolTip>
      </div>
      <CustomButton coloredReverse>Login</CustomButton>
      <div className={Style.signUpWrapper}>
        Don’t have an account?{" "}
        <span>
          <ToolTip>
            <Link
              to=""
              // to={paths.auth.signUp}
              className={Style.link}
            >
              Sign up
            </Link>
          </ToolTip>
        </span>
      </div>
      <ThirdPartyLogin text="Or login with" />
    </>
  );
};

export default LoginView;

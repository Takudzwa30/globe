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
import Style from "./SignUpView.module.css";

const SignUpView = () => {
  const form = useForm({
    inputs: {
      firstName: {
        required: true,
      },
      lastName: {
        required: true,
      },
      email: {
        required: true,
        nature: "email",
      },
      phoneNumber: {
        required: true,
      },
      password: {
        required: true,
        nature: "password",
      },
      confirmPassword: {
        required: true,
        nature: "confirmPassword",
      },
    },
  });
  return (
    <>
      <AuthHeading
        pageTitle={"Sign up"}
        subTitle="Let’s get you all st up so you can access your personal account."
      />
      <div className={Style.form}>
        <SimpleInput
          label="First Name"
          placeholder="Your first name"
          {...form.getInputProps("firstName")}
        />
        <SimpleInput
          label="Last Name"
          placeholder="Your last name"
          {...form.getInputProps("lastName")}
        />
        <SimpleInput
          label="Email"
          placeholder="Your email address"
          {...form.getInputProps("email")}
        />
        <SimpleInput
          label="Phone Number"
          placeholder="Your phone number"
          type="number"
          {...form.getInputProps("phoneNumber")}
        />
        <SimpleInput
          label="Password"
          placeholder="Your password"
          type="password"
          {...form.getInputProps("password")}
        />
        <SimpleInput
          label="Confirm Password"
          placeholder="Confirm your password"
          type="password"
          {...form.getInputProps("confirmPassword")}
        />
      </div>
      <div className={Style.links}>
        {/* TODO : fix the check component so that it can give its value  */}
        <CheckComponent value="I agree to all the Terms and Privacy Policies" />
      </div>
      <CustomButton coloredReverse>Create account</CustomButton>
      <div className={Style.signUpWrapper}>
        Already have an account?{" "}
        <span>
          <Link to={paths.auth.login} className={Style.link}>
            Login
          </Link>
        </span>
      </div>
      <ThirdPartyLogin text="Or Sign up with" />
    </>
  );
};

export default SignUpView;

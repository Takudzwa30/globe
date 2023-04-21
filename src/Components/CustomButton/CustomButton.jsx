import React from "react";

// Libraries
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Utilities
import classNames from "../../utils/classNames";

// Icons
import { BsSendFill } from "react-icons/bs";

// Components
import { Button } from "@hybris-software/ui-kit";

// Style
import Theme from "../../Assets/css/Theme.module.css";

const CustomButton = ({ children, baseClassName, to, ...props }) => (
  <Button
    className={classNames(
      baseClassName,
      props.border && Theme.borderBtn,
      props.colored && Theme.coloredBtn,
      props.icon && Theme.iconBtn
    )}
    {...props}
  >
    {/* <Link className={props.linkClassName} to={to ? to : "#"}> */}
      {props.icon && <BsSendFill />}
      {children}
    {/* </Link> */}
  </Button>
);

// check props type
CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomButton;

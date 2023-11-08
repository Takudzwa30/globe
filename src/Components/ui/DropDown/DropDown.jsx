import React, { useState } from "react";

// Libraries
import { Link, useLocation } from "react-router-dom";

// Icons
import DropDownIconOne from "../../../Assets/svgIcons/dropDownIconOne/DropDownIconOne";
import DropDownIconTwo from "../../../Assets/svgIcons/dropDownIconTwo/DropDownIconTwo";

// Styles
import Style from "./DropDown.module.css";

const DropDown = ({ title, children, data, length }) => {
   // Hooks
   const location = useLocation();
   const [dropDownOpen, setDropDownOpen] = useState(false);
   const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

   return (
      <>
         <h2>{title}</h2>
         <div
            style={{
               height:
                  dropDownOpen && setSidebarIsOpen ? `${length * 47}px` : "20px",
            }}
            className={dropDownOpen ? Style.dropDown : Style.dropDownClosed}
         >
            {/* {data?.map((link, i) => (
            <Link
               className={
                  removeFirstLetter(location.pathname) === link.path
                     ? Style.linkActive
                     : Style.link
               }
               key={i}
               to={link.path}
               onClick={() => {
                  setSidebarIsOpen(false);
               }}
            >
               {i === 0 ? (
                  <div className={Style.firstDropDown}>
                     <DropDownIconOne />
                  </div>
               ) : (
                  <div className={Style.secondDropDown}>
                     <DropDownIconTwo />
                  </div>
               )}
               <p>{link.title}</p>
            </Link>
         ))} */}
            {children}
         </div>
      </>
   );
};

export default DropDown;

import React from "react";

// Components
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

// Libraries
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
      <main>
        <Navbar />
        <Outlet />
        <Footer />
      </main>
  );
};

export default MainLayout;

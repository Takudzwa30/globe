import React from "react";

// Components
import HeroSection from "./Components/HeroSection/HeroSection";
import Plan from "./Components/Plan/Plan";

const HomeView = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section>
        <Plan />
      </section>
    </>
  );
};

export default HomeView;

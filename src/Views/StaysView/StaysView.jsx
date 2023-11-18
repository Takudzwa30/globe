import React from "react";

// Components
import HeroSection from "./Components/HeroSection/HeroSection";
import Search from "../../Components/Search/Search";
import Places from "./Components/Places/Places";

// Styles
import Style from "./StaysView.module.css";

const StaysView = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>

      <section className={Style.search}>
        <Search filterValue="stays" />
      </section>

      <section className={Style.places}>
        <Places />
      </section>
    </>
  );
};

export default StaysView;

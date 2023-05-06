import React from "react";

// Components
import HeroSection from "./Components/HeroSection/HeroSection";
import Search from "../../Components/Search/Search";
import Map from "./Components/Map/Map";

// Styles
import Style from "./FlightsView.module.css";

const FlightsView = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>

      <section className={Style.search}>
        <Search filterValue="flights" />
      </section>

      <section>
        <Map />
      </section>
    </>
  );
};

export default FlightsView;

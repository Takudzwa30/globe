import React from "react";

// Components
import HeroSection from "./Components/HeroSection/HeroSection";
import Plan from "./Components/Plan/Plan";
import FlightandHotels from "./Components/FlightandHotels/FlightandHotels";
import Reviews from "./Components/Reviews/Reviews";
import Search from "../../Components/Search/Search";

// Styles
import Style from "./HomeView.module.css";

const HomeView = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section className={Style.search}>
        <Search home filterValue="flights" />
      </section>
      <section>
        <Plan />
      </section>
      <section
        style={{
          marginBlock: "100px",
        }}
      >
        <FlightandHotels />
      </section>
      <section>
        <Reviews />
      </section>
    </>
  );
};

export default HomeView;

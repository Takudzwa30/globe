import React from "react";

// Components
import HeroSection from "./Components/HeroSection/HeroSection";
import Search from "../../Components/Search/Search";
import Map from "./Components/Map/Map";
import Places from "./Components/Places/Places";

// Styles
import Style from "./FlightsView.module.css";
// import InputRangeSlider from "../../Components/ui/InputRangeSlider/InputRangeSlider";

const FlightsView = () => {
   return (
      <>
         {/* <InputRangeSlider /> */}
         <section>
            <HeroSection />
         </section>

         <section className={Style.search}>
            <Search filterValue="flights" />
         </section>

         <section>
            <Map />
         </section>

         <section className={Style.places}>
            <Places />
         </section>
      </>
   );
};

export default FlightsView;

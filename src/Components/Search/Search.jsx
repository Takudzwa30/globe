import React, { useState } from "react";

// Loibraries
import { Container } from "@hybris-software/ui-kit";

// Components
import SimpleSelect from "../../Components/SimpleSelect/SimpleSelect";
import DateRange from "../../Components/DateRange/DateRange";

// Styles
import Style from "./Search.module.css";

const Search = () => {
  const [filter, setFilter] = useState("");
  const f = ["Dubai", "Sharjah", "Abu Dhabi"];
  return (
    <Container>
      <div className={Style.search}>
        <SimpleSelect
          placeholder="Deposit Type"
          value={filter}
          label="Trip"
          items={f}
          setValue={(value) => {
            setFilter(value);
          }}
        />
        <DateRange label={"Depart - Return"} />
      </div>
    </Container>
  );
};

export default Search;

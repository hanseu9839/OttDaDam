import React, { useState } from "react";
import OddHeader from "../OddHeader/OddHeader";
import OddCategory from "./OddCategory/OddCategory";
import OddSearch from "./OddSearch/OddSearch";
import OddContent from "./OddContent/oddContent";
import styles from "./OddMain.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { useSearchParams } from "react-router-dom";

function OddMain(props) {
  const contry = ["구로구", "양천구"];

  const [neighborhoodState, setneighborhoodState] = useState();
  const [contryState, setContryState] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const countyvalue = contry.map((value) => <option>{value}</option>);

  const handleContry = (contryvalue) => {
    setContryState(contryvalue);
  };

  const handleNeighborHood = (neighborhoodvalue) => {
    setneighborhoodState(neighborhoodvalue);
  };

  const addQuery = (queryvalue) => {
    let currentQuery = queryvalue;
    currentQuery = currentQuery.split(",");

    setSearchParams({
      gu: currentQuery[0],
      dong: currentQuery[1],
    });
  };
  return (
    <>
      <OddHeader />
      <OddSearch
        OnHandleContry={handleContry}
        OnContryValue={countyvalue}
        OnHandleNeighborHood={handleNeighborHood}
        OnContryState={contryState}
        OnNeighborhoodState={neighborhoodState}
        OnAddQuery={addQuery}
      />
      <section className={styles.main}>
        <OddCategory Params={searchParams} />
        <OddContent />
      </section>
    </>
  );
}

export default OddMain;

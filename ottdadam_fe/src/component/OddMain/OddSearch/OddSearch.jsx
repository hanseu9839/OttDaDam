import React, { useState } from "react";
import styles from "./OddSearch.module.css";
import { Button, Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

function OddSearch(props) {
  const contry = ["구로구", "양천구"];
  const neighborhood = {
    guro: ["개봉동", "오류동"],
    yangcheon: ["목동", "신정동"],
    defalutvalue: ["동"],
  };
  const [neighborhoodState, setneighborhoodState] = useState();
  const [contryState, setContryState] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const countyvalue = contry.map((value) => <option>{value}</option>);
  const handleContry = (e) => {
    const contryvalue = e.target.value;
    setContryState(contryvalue);
  };
  const handleNeighborHood = (e) => {
    const neighborhoodvalue = e.target.value;
    setneighborhoodState(neighborhoodvalue);
  };

  const addQuery = (e) => {
    let currentQuery = e.target.dataset.query;
    currentQuery = currentQuery.split(",");

    setSearchParams({
      gu: currentQuery[0],
      dong: currentQuery[1],
    });
  };

  return (
    <>
      <div className={styles.oddsearch}>
        <div className={styles.searchtext}>
          <span> 지역을 선택해주세요! ♻️ </span>
        </div>

        <form className={styles.searchform}>
          <div className={styles.search}>
            <Form.Select size="sm" className={styles.select}>
              <option selected disabled>
                서울시
              </option>
            </Form.Select>
            <Form.Select
              size="sm"
              className={styles.select}
              onChange={handleContry}
            >
              <option selected disabled>
                구
              </option>
              {countyvalue}
            </Form.Select>
            <Form.Select
              size="sm"
              className={styles.select}
              onChange={handleNeighborHood}
            >
              {contryState === "구로구" ? (
                neighborhood.guro.map((guro) => <option>{guro}</option>)
              ) : contryState === "양천구" ? (
                neighborhood.yangcheon.map((yangcheon) => (
                  <option>{yangcheon}</option>
                ))
              ) : (
                <option selected disabled>
                  {neighborhood.defalutvalue}
                </option>
              )}
            </Form.Select>
            <Button
              className={styles.button}
              variant="outline-success"
              data-query={[contryState, neighborhoodState]}
              onClick={addQuery}
            >
              검색.
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default OddSearch;

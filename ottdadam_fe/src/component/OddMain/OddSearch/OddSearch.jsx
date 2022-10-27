import React from "react";
import styles from "./OddSearch.module.css";
import { Button, Form } from "react-bootstrap";

function OddSearch({
  OnHandleContry,
  OnContryValue,
  OnHandleNeighborHood,
  OnContryState,
  OnNeighborhoodState,
  OnAddQuery,
}) {
  const neighborhood = {
    guro: ["개봉동", "오류동"],
    yangcheon: ["목동", "신정동"],
    defalutvalue: ["동"],
  };

  const handleContry = (e) => {
    const contryvalue = e.target.value;
    OnHandleContry(contryvalue);
  };

  const handleNeighborHood = (e) => {
    const neighborhoodvalue = e.target.value;
    OnHandleNeighborHood(neighborhoodvalue);
  };

  const addQuery = (e) => {
    const currentQuery = e.target.dataset.query;
    OnAddQuery(currentQuery);
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
              {OnContryValue}
            </Form.Select>
            <Form.Select
              size="sm"
              className={styles.select}
              onChange={handleNeighborHood}
            >
              {OnContryState === "구로구" ? (
                neighborhood.guro.map((guro) => <option>{guro}</option>)
              ) : OnContryState === "양천구" ? (
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
              data-query={[OnContryState, OnNeighborhoodState]}
              onClick={addQuery}
            >
              검색
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default OddSearch;

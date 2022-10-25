import React, { useState } from "react";
import styles from "./OddSearch.module.css";
import { Button, Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

function OddSearch(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [guParams, setGuParams] = useState();
  const [dongParams, setDongParams] = useState();
  let suboption = {
    guro: ["개봉동", "오류동"],
    yangcheon: ["목동", "신정동"],
  };

  const addQuery = (e) => {
    let currentQuery = e.target.dataset.query;
    currentQuery = currentQuery.split(",");

    // const prevQuery = searchParams.getAll("filter");

    setSearchParams({
      gu: currentQuery[0],
      dong: currentQuery[1],
    });
  };

  const handleChangeDong = (e) => {
    const mainoption = e.target.value;
    const subcity = document.getElementById("dong");
    console.log(`suboption ${suboption}`);
    console.log(mainoption);
    switch (mainoption) {
      case "gurogu":
        suboption = suboption.guro;
        setGuParams(mainoption);
        break;
      case "yangcheongu":
        suboption = suboption.yangcheon;
        setGuParams(mainoption);
        break;
    }
    subcity.options.length = 0;
    for (let i = 0; i < suboption.length; i++) {
      const option = document.createElement("option");
      option.innerText = suboption[i];
      subcity.append(option);
    }
  };

  const handleDongQuery = (e) => {
    const mainoption = e.target.value;
    console.log(mainoption);
    switch (mainoption) {
      case "오류동":
        setDongParams("orudong");
        break;
      case "개봉동":
        setDongParams("gaebongdong");
        break;
    }
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
              onChange={handleChangeDong}
            >
              <option value="gurogu">구로구</option>
              <option value="yangcheongu">양천구</option>
            </Form.Select>
            <Form.Select
              size="sm"
              className={styles.select}
              id="dong"
              onChange={handleDongQuery}
            >
              <option selected disabled>
                동
              </option>
            </Form.Select>

            <Button
              className={styles.button}
              variant="outline-success"
              data-query={[guParams, dongParams]}
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

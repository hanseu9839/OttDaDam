import React, { useState } from "react";
import styles from "./OddSearch.module.css";
import { Button, Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

function OddSearch(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [guParams, setGuParams] = useState();
  const [dongParams, setDongParams] = useState();
  const Citys = {
    city: "서울시",
    contry: ["구로구", "양천구"],
    neighborhood: {
      guro: ["개봉동", "오류동"],
      yangcheon: ["목동", "신정동"],
    },
  };
  const countyvalue = Citys.contry.map((value) => <option>{value}</option>);
  const addQuery = (e) => {
    let currentQuery = e.target.dataset.query;
    currentQuery = currentQuery.split(",");
    setSearchParams({
      gu: currentQuery[0],
      dong: currentQuery[1],
    });
  };

  const handleChangeDong = (e) => {
    const contry = e.target.value;
    const subcity = document.getElementById("dong");
    console.log(`neighborhood ${Citys.neighborhood}`);
    console.log(contry);
    switch (contry) {
      case "구로구":
        Citys.neighborhood = Citys.neighborhood.guro;
        setGuParams("gurogu");
        break;
      case "양천구":
        Citys.neighborhood = Citys.neighborhood.yangcheon;
        setGuParams("yangcheongu");
        break;
    }
    subcity.options.length = 0;
    for (let i = 0; i < Citys.neighborhood.length; i++) {
      const option = document.createElement("option");
      option.innerText = Citys.neighborhood[i];
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
                {Citys.city}
              </option>
            </Form.Select>
            <Form.Select
              size="sm"
              className={styles.select}
              onChange={handleChangeDong}
            >
              {countyvalue}
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

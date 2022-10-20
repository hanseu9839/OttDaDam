import React from "react";
import styles from "./OddSearch.module.css";
import { Button, Form } from "react-bootstrap";

function OddSearch(props) {
  const handleChangeDong = (e) => {
    const mainoption = e.target.value;
    const subcity = document.getElementById("dong");
    let suboption = {
      guro: ["개봉동", "오류동"],
      yangcheon: ["목동", "신정동"],
    };
    console.log(`suboption ${suboption}`);
    switch (mainoption) {
      case "구로구":
        suboption = suboption.guro;
        break;
      case "양천구":
        suboption = suboption.yangcheon;
        break;
    }
    subcity.options.length = 0;
    for (let i = 0; i < suboption.length; i++) {
      const option = document.createElement("option");
      option.innerText = suboption[i];
      subcity.append(option);
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
              <option selected disabled>
                구/군
              </option>
              <option>구로구</option>
              <option>양천구</option>
            </Form.Select>
            <Form.Select size="sm" className={styles.select} id="dong">
              <option selected disabled>
                동
              </option>
            </Form.Select>

            <Button className={styles.button} variant="outline-success">
              검색
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default OddSearch;

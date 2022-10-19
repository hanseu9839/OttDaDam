import React from "react";
import styles from "./OddSearch.module.css";
import { Button, Form } from "react-bootstrap";
function OddSearch(props) {
  return (
    <>
      <div className={styles.searchtext}>
        <span> 지역을 선택해주세요! ♻️ </span>
      </div>

      <form className={styles.searchform}>
        <div className={styles.search}>
          <Form.Select size="sm" className={styles.select}>
            <option selected disabled>
              시
            </option>
            <option>서울시</option>
          </Form.Select>
          <Form.Select size="sm" className={styles.select}>
            <option selected disabled>
              구/군
            </option>
            <option>구로구</option>
            <option>양천구</option>
          </Form.Select>
          <Form.Select size="sm" className={styles.select}>
            <option selected disabled>
              동
            </option>
            <option>개봉동</option>
            <option>오류동</option>
          </Form.Select>

          <Button className={styles.button} variant="outline-success">
            검색
          </Button>
        </div>
      </form>
    </>
  );
}

export default OddSearch;

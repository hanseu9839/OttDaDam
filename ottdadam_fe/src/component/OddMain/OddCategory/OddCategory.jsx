import React from "react";
import styles from "./OddCategory.module.css";
import { useState } from "react";

function OddCategory() {
  const [displays, setdisplay] = useState("none");
  const displayType = displays === "none" ? styles.none : styles.block;
  const handleGuClick = (e) => {
    const guro = e.target.childNodes[0].data;
    console.log(guro);
    if (displays === "none") {
      setdisplay("block");
    } else {
      setdisplay("none");
    }
  };

  return (
    <div className={styles.category}>
      <ul className={styles.mainseoul}>
        서울시
        <li className={styles.sub_gu}>
          <ul onClick={handleGuClick}>
            구로구
            <li className={`${styles.sub_dong} ${displayType}`}>
              <ul>오류동</ul>
              <ul>개봉동</ul>
            </li>
          </ul>
          <ul onClick={handleGuClick}>
            양천구
            <li className={`${styles.sub_dong} ${displayType}`}>
              <ul>목동</ul>
              <ul>신정동</ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default OddCategory;

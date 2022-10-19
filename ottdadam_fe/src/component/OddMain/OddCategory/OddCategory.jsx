import React from "react";
import styles from "./OddCategory.module.css";
function OddCategory(props) {
  return (
    <div className={styles.category}>
      <div>
        <a href="#">카테고리1</a>
      </div>
      <div>
        <a href="#">카테고리2</a>
      </div>
      <div>
        <a href="#">카테고리3</a>
      </div>
      <div>
        <a href="#">카테고리4</a>
      </div>
    </div>
  );
}

export default OddCategory;

import React from "react";
import styles from "./OddSearch.module.css";

function OddSearch(props) {
  return (
    <form className={styles.searchform}>
      <input type="text" placeholder="시" className={styles.input} />
      <input type="text" placeholder="구" className={styles.input} />
      <input type="text" placeholder="동" className={styles.input} />
      <button>검색</button>
    </form>
  );
}

export default OddSearch;

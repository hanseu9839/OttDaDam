import React from "react";
import styles from "./OddHeader.module.css";
function OddHeader(props) {
  return (
    <div className={styles.header}>
      <div className={styles.home}>
        <i className="fas fa-house"></i>
      </div>
      <div className={styles.logo}>
        <img src="image/logo.png" alt="#" width={50} height={50} />
      </div>
    </div>
  );
}

export default OddHeader;

import React from "react";
import OddHeader from "../OddHeader/OddHeader";
import OddCategory from "./OddCategory/OddCategory";
import OddSearch from "./OddSearch/OddSearch";
import OddContent from "./OddContent/oddContent";
import styles from "./OddMain.module.css";
import "bootstrap/dist/css/bootstrap.css";
function OddMain(props) {
  return (
    <>
      <OddHeader />
      <OddSearch />
      <section className={styles.main}>
        <OddCategory />
        <OddContent />
      </section>
    </>
  );
}

export default OddMain;

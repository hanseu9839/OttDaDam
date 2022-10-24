import React from "react";
import styles from "./OddCategory.module.css";
import { useState } from "react";

function OddCategory() {
  const [citymenus] = useState(["구로구", "양천구"]);
  const [dongmenus] = useState({
    guro: {
      name: "구로구",
      dong: ["오류동", "개봉동"],
    },
    yangcheon: {
      name: "양천구",
      dong: ["목동", "신정동"],
    },
  });
  const gurogu = document.getElementsByClassName("gurogu");
  const yangcheongu = document.getElementsByClassName("yangcheongu");

  const handleGuClick = (e) => {
    const val = e.target.childNodes[0].data;
    switch (val) {
      case dongmenus.guro.name:
        Array.from(gurogu).map((value) =>
          value.style.display == "none"
            ? (value.style.display = "block")
            : (value.style.display = "none")
        );
        break;
      case dongmenus.yangcheon.name:
        Array.from(yangcheongu).map((value) =>
          value.style.display == "none"
            ? (value.style.display = "block")
            : (value.style.display = "none")
        );
        break;
    }
  };

  return (
    <div className={styles.category}>
      <ul className={styles.mainseoul}>
        서울시
        <li className={styles.sub_gu}>
          {citymenus.map((value) => (
            <>
              <ul onClick={handleGuClick}>
                {value}
                <ul>
                  {value == dongmenus.guro.name &&
                    dongmenus.guro.dong.map((value) => (
                      <ul className={"gurogu"}>{value}</ul>
                    ))}
                  {value == dongmenus.yangcheon.name &&
                    dongmenus.yangcheon.dong.map((value) => (
                      <ul className={"yangcheongu"}>{value}</ul>
                    ))}
                </ul>
              </ul>
            </>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default OddCategory;

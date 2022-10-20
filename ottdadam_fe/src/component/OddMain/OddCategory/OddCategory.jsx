import React from "react";
import styles from "./OddCategory.module.css";
import { ListGroup } from "react-bootstrap";
function OddCategory(props) {
  return (
    <div className={styles.category}>
      <ListGroup as="ul">
        <ListGroup.Item
          as="ul"
          action
          href="#seoul"
          data-bs-toggle="collapse"
          aria-controls="collapseExample"
        >
          서울시
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default OddCategory;

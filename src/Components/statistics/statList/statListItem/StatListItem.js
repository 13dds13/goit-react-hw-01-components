import React from "react";
import styles from "./StatListItem.module.css";

const StatListItem = ({ label, percentage }) => {
  return (
    <li className={styles.listItem}>
      <span>{label} </span>
      <span className={styles.value}>{percentage}%</span>
    </li>
  );
};

export default StatListItem;

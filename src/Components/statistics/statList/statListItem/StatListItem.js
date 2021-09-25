import React from "react";
import PropTypes from "prop-types";
import styles from "./StatListItem.module.css";

const StatListItem = ({ label, percentage }) => {
  return (
    <li className={styles.listItem}>
      <span>{label} </span>
      <span className={styles.value}>{percentage}%</span>
    </li>
  );
};

StatListItem.propType = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatListItem;

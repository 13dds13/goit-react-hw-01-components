import React from "react";
import PropTypes from "prop-types";
import styles from "./StatsData.module.css";

const StatsData = ({ statType, statValue }) => {
  return (
    <li>
      <span> {statType}</span>
      <span className={styles.value}> {statValue}</span>
    </li>
  );
};

StatsData.propTypes = {
  statType: PropTypes.string,
  statValue: PropTypes.number,
};

export default StatsData;

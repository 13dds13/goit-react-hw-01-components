import React from "react";
import PropTypes from "prop-types";
import StatListItem from "./statListItem/StatListItem";
import styles from "./StatList.module.css";

const StatList = ({ stats }) => {
  return (
    <ul className={styles.list}>
      {stats.map(({ id, label, percentage }) => (
        <StatListItem key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
};

StatList.propType = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default StatList;

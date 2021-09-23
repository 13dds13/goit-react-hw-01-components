import React from "react";
import PropTypes from "prop-types";

const StatsData = ({ statType, statValue }) => {
  return (
    <li>
      <span> {statType}</span>
      <span> {statValue}</span>
    </li>
  );
};

StatsData.propTypes = {
  statType: PropTypes.string,
  statValue: PropTypes.number,
};

export default StatsData;

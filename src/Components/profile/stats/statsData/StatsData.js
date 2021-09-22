import React from "react";

const StatsData = ({ statType, statValue }) => {
  return (
    <li>
      <span> {statType}</span>
      <span> {statValue}</span>
    </li>
  );
};

export default StatsData;

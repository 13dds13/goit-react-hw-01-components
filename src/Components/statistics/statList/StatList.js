import React from "react";
import StatListItem from "./statListItem/StatListItem";

const StatList = ({ stats }) => {
  return (
    <ul>
      {stats.map(({ id, label, percentage }) => (
        <StatListItem key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
};

export default StatList;

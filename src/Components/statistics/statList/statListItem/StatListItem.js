import React from "react";

const StatListItem = ({ label, percentage }) => {
  return (
    <li>
      <span>{label} </span>
      <span>{percentage}%</span>
    </li>
  );
};

export default StatListItem;

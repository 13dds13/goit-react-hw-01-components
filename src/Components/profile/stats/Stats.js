import React from "react";
import StatsData from "./statsData/StatsData";

const Stats = ({ stats }) => {
  return (
    <ul>
      {Object.keys(stats).map((item) => (
        <StatsData key={item} statType={item} statValue={stats[item]} />
      ))}
    </ul>
  );
};

export default Stats;

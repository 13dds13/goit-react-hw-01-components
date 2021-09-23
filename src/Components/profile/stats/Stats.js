import React from "react";
import PropTypes from "prop-types";
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

Stats.propTypes = {
  stats: PropTypes.object,
};

export default Stats;

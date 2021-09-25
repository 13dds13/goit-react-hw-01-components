import React from "react";
import PropTypes from "prop-types";
import Section from "./section/Section";
import StatList from "./statList/StatList";

const Statistics = ({ stats, title }) => {
  return (
    <Section title={title}>
      <StatList stats={stats} />
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;

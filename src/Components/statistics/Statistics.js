import React from "react";
import Section from "./section/Section";
import StatList from "./statList/StatList";

const Statistics = ({ stats }) => {
  return (
    <Section title="Upload stats">
      <StatList stats={stats} />
    </Section>
  );
};

export default Statistics;

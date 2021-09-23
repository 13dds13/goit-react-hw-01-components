import React from "react";

const Section = ({ children }) => {
  return (
    <section>
      <h2>Upload stats</h2>
      {children}
    </section>
  );
};

export default Section;

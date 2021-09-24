import React from "react";
import styles from "./Section.module.css";

const Section = ({ children, title }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title.toUpperCase()}</h2>
      {children}
    </section>
  );
};

export default Section;

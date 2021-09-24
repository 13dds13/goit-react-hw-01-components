import React from "react";
import styles from "./Container.module.css";

const Container = ({ children }) => {
  return (
    <div className={styles.container}>
      <h1>react-hw-01</h1>
      {children}
    </div>
  );
};

export default Container;

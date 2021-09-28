import React from "react";
import PropTypes from "prop-types";
import styles from "./Container.module.css";

const Container = ({ children }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>react-hw-01</h1>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;

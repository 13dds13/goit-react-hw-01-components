import React from "react";
import DescriptionInfo from "./descriptionInfo/DescriptionInfo";
import styles from "./Description.module.css";

const Description = ({ user }) => {
  return (
    <div className={styles.description}>
      <DescriptionInfo user={user} />
    </div>
  );
};

export default Description;

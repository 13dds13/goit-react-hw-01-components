import React from "react";
import PropTypes from "prop-types";
import styles from "./DescriptionInfo.module.css";

const DescriptionInfo = ({ user: { avatar, name, tag, location } }) => {
  return (
    <>
      <img src={avatar} alt="Аватар пользователя" width="128" />
      <p className={styles.name}>{name}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </>
  );
};

DescriptionInfo.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};

export default DescriptionInfo;

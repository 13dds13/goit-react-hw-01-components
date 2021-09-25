import React from "react";
import PropTypes from "prop-types";
import styles from "./Description.module.css";

const Description = ({ name, tag, location, avatar }) => {
  return (
    <div className={styles.descriptionWrap}>
      <img
        src={avatar}
        alt={`Аватар пользователя ${name}`}
        width="128"
        height="128"
      />
      <p className={styles.name}>{name}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>
  );
};

Description.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
};

export default Description;

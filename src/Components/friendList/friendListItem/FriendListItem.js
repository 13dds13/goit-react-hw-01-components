import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
  const { avatar, isOnline, name } = friend;
  return (
    <li className={styles.listItem}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img className={styles.img} src={avatar} alt={name} width="48" />
      <p className={styles.text}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }),
};

export default FriendListItem;

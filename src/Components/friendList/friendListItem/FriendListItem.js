import React from "react";
import PropTypes from "prop-types";

const FriendListItem = ({ friend }) => {
  const { avatar, isOnline, name } = friend;
  return (
    <li>
      <span className={isOnline ? "online" : "offline"}></span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;

import React from "react";

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

export default FriendListItem;

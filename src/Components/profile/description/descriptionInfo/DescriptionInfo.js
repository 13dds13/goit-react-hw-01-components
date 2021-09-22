import React from "react";

const DescriptionInfo = ({ user: { avatar, name, tag, location } }) => {
  return (
    <>
      <img src={avatar} alt="Аватар пользователя" />
      <p>{name}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </>
  );
};

export default DescriptionInfo;

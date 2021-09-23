import React from "react";
import PropTypes from "prop-types";

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

DescriptionInfo.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};

export default DescriptionInfo;

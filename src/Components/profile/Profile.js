import React from "react";
import PropTypes from "prop-types";
import Description from "./description/Description";
import Stats from "./stats/Stats";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.container}>
      <Description name={name} tag={tag} location={location} avatar={avatar} />
      <Stats stats={stats} />
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
export default Profile;

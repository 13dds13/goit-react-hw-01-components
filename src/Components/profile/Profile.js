import React from "react";
import Description from "./description/Description";
import Stats from "./stats/Stats";
import styles from "./Profile.module.css";

const Profile = ({ user }) => {
  return (
    <div className={styles.container}>
      <Description user={user} />
      <Stats stats={user.stats} />
    </div>
  );
};

export default Profile;

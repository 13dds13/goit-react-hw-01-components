import React from "react";
import Description from "./description/Description";
import Stats from "./stats/Stats";

const Profile = ({ user }) => {
  return (
    <div>
      <Description user={user} />
      <Stats stats={user.stats} />
    </div>
  );
};

export default Profile;

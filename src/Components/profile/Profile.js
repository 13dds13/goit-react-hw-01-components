import React from "react";
import data from "../../data";
import Description from "./description/Description";
import Stats from "./stats/Stats";

const Profile = () => {
  return (
    <div>
      <Description user={data.user} />
      <Stats stats={data.user.stats} />
    </div>
  );
};

export default Profile;

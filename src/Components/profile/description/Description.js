import React from "react";
import DescriptionInfo from "./descriptionInfo/DescriptionInfo";

const Description = ({ user }) => {
  return (
    <div>
      <DescriptionInfo user={user} />
    </div>
  );
};

export default Description;

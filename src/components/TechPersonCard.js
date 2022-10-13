import React from "react";
import "./TechPersonCard.css";

const TechPersonCard = ({ profileImg, name, flag, bio }) => {
  return (
    <div className="profileCard">
      <div className="techInfo">
        <div className="float cropPic">
          <img src={profileImg} alt="Profile" />
        </div>

        <div className="person">
          <h2 className="name">{name}</h2>
          <img className="flag" src={flag} alt="Flag" />
        </div>
      </div>

      <div className="techBio">
        <div className="bio">
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default TechPersonCard;

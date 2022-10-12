import React from "react";
import "./profileCard.css";

const ProfileCard = ({ profileImg, name, flag, bio, github, linkedin }) => {
  return (
    <div className="profileCard">
      <div>
        <div className="cropPic">
          <img src={profileImg} alt="Profile" />
        </div>
      </div>

      <div>
        <div>
          <div className="person">
            <p className="name">{name}</p>
            <img className="flag" src={flag} alt="Flag" />
          </div>

          <div className="bio">
            <p>{bio}</p>
          </div>

          <div className="professionalProfiles">
            <a href={github} className="github">
              <p>Github</p>
            </a>

            <a href={linkedin} className="linkedin">
              <p>LinkedIn</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

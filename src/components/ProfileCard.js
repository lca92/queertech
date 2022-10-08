import React from "react";

const ProfileCard = ({ profileImg, name, bio, github, linkedin }) => {
  return (
    <div>
      <img src={profileImg} alt="Profile" />
      <div>
        <p className="name">{name}</p>
        <p className="bio">{bio}</p>

          <a href={github} className="github">
            <img src="" alt="Github Icon" />
            <p>Github</p>
          </a>

          <a href={linkedin} className="linkedin">
            <img src="" alt="LinkedIn Icon" />
            <p>LinkedIn</p>
          </a>

        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

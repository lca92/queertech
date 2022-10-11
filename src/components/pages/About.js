import React from "react";
import ProfileCard from "../ProfileCard";
import SideMenu from "../SideMenu.js";
import './About.css';

const About = () => {
  return (
    <div className="aboutPage">
      <div>
        <ProfileCard
          profileImg=""
          name="Roxanie Fernandes"
          bio=""
          github="https://github.com/RoxanieFernandes"
          linkedin="https://www.linkedin.com/in/roxanie-fernandes-6077a89b"
        />
        <ProfileCard
          profileImg=""
          name="Lena Araújo"
          bio=""
          github="https://github.com/lca92"
          linkedin="https://www.linkedin.com/in/araujolena/"
        />
      </div>

      <div>
        <SideMenu />
      </div>

    </div>
  );
};

export default About;
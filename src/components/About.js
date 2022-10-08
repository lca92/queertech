import React from "react";
import ProfileCard from "./ProfileCard";
import SideMenu from "./SideMenu.js";

const About = () => {
  return (
    <div>
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
    </div>
  );
};

export default About;

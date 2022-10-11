import React from "react";
<<<<<<< HEAD:src/components/pages/Home.js
import HomeMenu from "../HomeMenu";
=======
import HomeMenu from "./HomeMenu";
import "./Home.css";
>>>>>>> d5457068addaaec4666e468ccdec19edea79ad0e:src/components/Home.js

const Home = () => {
  return (
    <div>
      <div className="flagStripes">
        <HomeMenu />
      </div>
      <div className="flagTriangle">
        <div className="blackTriangle">
          <div className="brownTriangle">
            <div className="blueTriangle">
              <div className="pinkTriangle">
                <div className="whiteTriangle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

import React from "react";
import HomeMenu from "./HomeMenu";
import "./Home.css";

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

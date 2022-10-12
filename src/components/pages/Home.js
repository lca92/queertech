import React from "react";
import HomeMenu from '../HomeMenu';
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="flagStripes">
        <HomeMenu />
      </div>
      <div className="flagTriangle triangles">
        <div className="blackTriangle triangles">
          <div className="brownTriangle triangles">
            <div className="blueTriangle triangles">
              <div className="pinkTriangle triangles">
                <div className="whiteTriangle triangles"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

import SideMenu from "../SideMenu";
import "./Search.css";
import SearchProject from "../SearchProject";
import SearchUser from "../SearchUser";

const Search = () => {
  return (
    <div className="searchPage">
      <div className="searchSection">
        <div className="userSection">
          <SearchUser />
        </div>

        <div className="projectSection">
          <SearchProject />
        </div>
      </div>
      <div>
        <SideMenu />
      </div>
    </div>
  );
};

export default Search;

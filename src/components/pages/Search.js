import SideMenu from "../SideMenu";
import "./Search.css";
import SearchProject from "../SearchProject";
import SearchUser from "../SearchUser";

const Search = () => {
  return (
    <div className="searchPage">
      <div>
        <SearchUser />
      </div>

      <div>
        <SearchProject />
      </div>

      <div>
        <SideMenu />
      </div>
    </div>
  );
};

export default Search;

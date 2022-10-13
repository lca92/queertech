import "./SearchUser.css";
import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import axios from "axios";

const SearchUser = () => {
  const [users, setUser] = useState([]);
  const [search, setSearch] = useState("");

  const getUsers = async () => {
    const { data } = await axios.get(
      "https://ironrest.herokuapp.com/queerTechUsers"
    );
    setUser(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  // const userFilter = getUsers.filter((user) => user.startsWith(search));
  return (
    <div className="searchProfessional">
      <div className="searchUserTitle">
        <h2>Buscar Profissional</h2>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="userMap">
        {/* getUsers.map */}
        {users.map((user) => ( 
          <UserCard
            key={user._id}
            name={user.name}
            github={user.github}
            linkedin={user.linkedin}
            portfolio={user.portfolio}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchUser;

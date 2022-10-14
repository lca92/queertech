import "./SearchUser.css";
import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import axios from "axios";

const SearchUser = () => {
  const [users, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get(
        "https://ironrest.herokuapp.com/queerTechUsers"
      );
      setUser(data);
      setFilteredUsers(data);
    };
    getUsers();
  }, [users]);

  useEffect(() => {
    if (search !== "") {
      const filteredData = users.filter((user) => {
        return (
          user.languages.includes(search.toUpperCase()) ||
          user.typeOfWork.includes(search.toUpperCase())
        );
      });
      setFilteredUsers(filteredData);
    } else {
      setFilteredUsers(users);
    }
  }, [search, users]);

  return (
    <div className="searchProfessional">
      <div className="searchUserTitle">
        <h2>Buscar Profissional</h2>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="userMap">
        {filteredUsers.map((user) => (
          <UserCard
            key={user._id}
            name={user.name}
            github={user.github}
            linkedin={user.linkedin}
            portfolio={user.portfolio}
            typeOfWork={user.typeOfWork}
            languages={user.languages}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchUser;

import "./SearchUser.css";
import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import UserForm from "./UserForm";
import axios from "axios";

const SearchUser = () => {
  const [users, setUser] = useState([]);
  const [search, setSearch] = useState(false);

  const getUsers = async () => {
    const { data } = await axios.get(
      "https://ironrest.herokuapp.com/queerTechUsers"
    );
    setUser(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="searchProfessional">
      <div className="searchUserTitle">
        <h2>Buscar Profissional</h2>
      </div>
      <div className="userMap">
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

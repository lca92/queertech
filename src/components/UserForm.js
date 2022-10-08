import { useState } from "react";
import "./UserForm.css";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");

  return (
    <div className="AddMovie">
      <h4>Cadastro de Usuáries</h4>
      <div className="form">
        <form>
          <label>Nome: </label>
          <input type="text" name="name" value={name} />

          <label>Github: </label>
          <input type="text" name="github" value={github} />

          <label>LinkedIn: </label>
          <input type="text" name="linkedin" value={linkedin} />

          <label>Portfólio: </label>
          <input type="text" name="portfolio" checked={portfolio} />

          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;

import { useState } from "react";
import "./UserForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Checkbox from "./Checkbox";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [homeOffice, setHomeOffice] = useState (false);
  const [presencial, setPresencial] = useState (false);
  const [pj, setPj] = useState (false);
  const [clt, setClt] = useState (false);
  const [junior, setJunior] = useState (false);
  const [pleno, setPleno] = useState (false);
  const [senior, setSenior] = useState (false);
  const [javaScript, setJavaScript] = useState (false);
  const [html, setHtml] = useState (false);
  const [css, setCss] = useState (false);


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name,
      github,
      linkedin,
      portfolio,
    };

    await axios.post("https://ironrest.herokuapp.com/queerTechUsers", newUser);
    navigate("/search");
  };

  return (
    <div className="createForm">
      <div className="form">
        <h4>Cadastro de Profissional</h4>
        <form onSubmit={handleSubmit}>
          <label>Nome: </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <label>Github: </label>
          <input
            type="text"
            required
            value={github}
            onChange={(e) => {
              setGithub(e.target.value);
            }}
          />

          <label>LinkedIn: </label>
          <input
            type="text"
            required
            value={linkedin}
            onChange={(e) => {
              setLinkedin(e.target.value);
            }}
          />

          <label>Portfólio: </label>
          <input
            type="text"
            value={portfolio}
            onChange={(e) => {
              setPortfolio(e.target.value);
            }}
          />

          <Checkbox />

          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;

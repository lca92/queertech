import { useState } from "react";
import "./UserForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");

  const navigate = useNavigate ()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newUser = {
      name,
      github,
      linkedin,
      portfolio
    }
   
    
    await axios.post('https://ironrest.herokuapp.com/queerTechUsers', newUser)
    navigate('/search')
  }

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
              onChange={(e) => {setName(e.target.value)}}
          />

          <label>Github: </label>
          <input 
              type="text"
              required
              value={github}
              onChange={(e) => {setGithub(e.target.value)}}
          />

          <label>LinkedIn: </label>
          <input 
              type="text"
              required
              value={linkedin}
              onChange={(e) => {setLinkedin(e.target.value)}}
          />

          <label>Portfólio: </label>
          <input 
              type="text"
              value={portfolio}
              onChange={(e) => {setPortfolio(e.target.value)}}
          />

          <button type="submit">Salvar</button>
        </form>
      </div>
    
    </div>
  );
};

export default UserForm;

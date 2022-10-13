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
  const [homeOffice, setHomeOffice] = useState(false);
  const [presencial, setPresencial] = useState(false);
  const [pj, setPj] = useState(false);
  const [clt, setClt] = useState(false);
  const [junior, setJunior] = useState(false);
  const [pleno, setPleno] = useState(false);
  const [senior, setSenior] = useState(false);
  const [javaScript, setJavaScript] = useState(false);
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name,
      github,
      linkedin,
      portfolio,
      homeOffice,
    };
 
    
    await axios.post("https://ironrest.herokuapp.com/queerTechUsers", newUser);
    navigate("/search");
  };

  const check = () => {

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

          <div className="typeOfWork">
            <div className="homeOffice">
              <input
                type="checkbox"
                id="homeOffice"
                name="homeOffice"
                value="HomeOffice"
                checked={homeOffice}
                onChange={() => {
                  setHomeOffice(!homeOffice)
                }}
              />
              Remoto
            </div>
            {/* <div className="presencial">
              <input
                type="checkbox"
                id="presencial"
                name="presencial"
                value="Presencial"
                checked={presencial}
                onChange={check}
              />
              Presencial
            </div>

            <div className="pj">
              <input
                type="checkbox"
                id="pj"
                name="pj"
                value="pj"
                checked={pj}
                onChange={check}
              />
              PJ
            </div>

            <div className="clt">
              <input
                type="checkbox"
                id="clt"
                name="clt"
                value="clt"
                checked={clt}
                onChange={check}
              />
              CLT
            </div>

            <div className="junior">
              <input
                type="checkbox"
                id="junior"
                name="junior"
                value="junior"
                checked={junior}
                onChange={check}
              />
              Júnior
            </div>

            <div className="pleno">
              <input
                type="checkbox"
                id="pleno"
                name="pleno"
                value="pleno"
                checked={pleno}
                onChange={check}
              />
              Pleno
            </div>

            <div className="senior">
              <input
                type="checkbox"
                id="senior"
                name="senior"
                value="senior"
                checked={senior}
                onChange={check}
              />
              Sênior
            </div>
          </div>
          <div className="languages">
            <div className="javascript">
              <input
                type="checkbox"
                id="javascript"
                name="javascript"
                value="javascript"
                checked={javaScript}
                onChange={check}
              />
              JavaScript
            </div>
            <div className="html">
              <input
                type="checkbox"
                id="html"
                name="html"
                value="html"
                checked={html}
                onChange={check}
              />
              HTML
            </div>

            <div className="css">
              <input
                type="checkbox"
                id="css"
                name="css"
                value="css"
                checked={css}
                onChange={check}
              />
              CSS
            </div> */}
          </div>

          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;

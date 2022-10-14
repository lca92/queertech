import "./ProjectForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProjectForm = (props) => {
  const [project, setProject] = useState("");
  const [site, setSite] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [summary, setSummary] = useState("");
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

  let typeOfWork = [];
  let languages = [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (homeOffice) typeOfWork.push("REMOTO");
    if (presencial) typeOfWork.push("PRESENCIAL");
    if (pj) typeOfWork.push("PJ");
    if (clt) typeOfWork.push("CLT");
    if (junior) typeOfWork.push("JÚNIOR");
    if (pleno) typeOfWork.push("PLENO");
    if (senior) typeOfWork.push("SÊNIOR");

    if (javaScript) languages.push("JAVASCRIPT");
    if (html) languages.push("HTML");
    if (css) languages.push("CSS");

    const newProject = {
      project,
      site,
      linkedin,
      instagram,
      summary,
      typeOfWork,
      languages,
    };

    await axios.post(
      "https://ironrest.herokuapp.com/queerTechProjects",
      newProject
    );
    navigate("/search");
  };

  return (
    <div className="createProjectForm">
      <div className="projectForm">
        <h4>Cadastro de Projeto</h4>
        <form onSubmit={handleSubmit}>
          <label>Nome do Projeto: </label>
          <input
            type="text"
            required
            value={project}
            onChange={(e) => {
              setProject(e.target.value);
            }}
          />
          <label>Site: </label>
          <input
            type="text"
            required
            value={site}
            onChange={(e) => {
              setSite(e.target.value);
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

          <label>Instagram: </label>
          <input
            type="text"
            value={instagram}
            onChange={(e) => {
              setInstagram(e.target.value);
            }}
          />

          <label>Resumo do Projeto: </label>
          <textarea
            type="text"
            value={summary}
            onChange={(e) => {
              setSummary(e.target.value);
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
                    setHomeOffice(!homeOffice);
                  }}
                />
                REMOTO
              </div>
              <div className="presencial">
                <input
                  type="checkbox"
                  id="presencial"
                  name="presencial"
                  value="Presencial"
                  checked={presencial}
                  onChange={() => {
                    setPresencial(!presencial);
                  }}
                />
                PRESENCIAL
              </div>

              <div className="pj">
                <input
                  type="checkbox"
                  id="pj"
                  name="pj"
                  value="pj"
                  checked={pj}
                  onChange={() => {
                    setPj(!pj);
                  }}
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
                  onChange={() => {
                    setClt(!clt);
                  }}
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
                  onChange={() => {
                    setJunior(!junior);
                  }}
                />
                JÚNIOR
              </div>

              <div className="pleno">
                <input
                  type="checkbox"
                  id="pleno"
                  name="pleno"
                  value="pleno"
                  checked={pleno}
                  onChange={() => {
                    setPleno(!pleno);
                  }}
                />
                PLENO
              </div>

              <div className="senior">
                <input
                  type="checkbox"
                  id="senior"
                  name="senior"
                  value="senior"
                  checked={senior}
                  onChange={() => {
                    setSenior(!senior);
                  }}
                />
                SÊNIOR
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
                  onChange={() => {
                    setJavaScript(!javaScript);
                  }}
                />
                JAVASCRIPT
              </div>
              <div className="html">
                <input
                  type="checkbox"
                  id="html"
                  name="html"
                  value="html"
                  checked={html}
                  onChange={() => {
                    setHtml(!html);
                  }}
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
                  onChange={() => {
                    setCss(!css);
                  }}
                />
                CSS
              </div>
            </div>

        

          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;

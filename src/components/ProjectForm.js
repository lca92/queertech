import React from "react";
import "./ProjectForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Checkbox from "./Checkbox";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProject = {
      project,
      site,
      linkedin,
      instagram,
      summary,
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

          <Checkbox />

          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;

import "./SearchProject.css";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const SearchProject = () => {
  const [projects, setProject] = useState([]);
  const [find, setfind] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const { data } = await axios.get(
        "https://ironrest.herokuapp.com/queerTechProjects"
      );
      setProject(data);
      setFilteredProjects(data);
    };
    getProjects();
  }, [projects]);

  useEffect(() => {
    if (find !== "") {
      const filteredData = projects.filter((project) => {
        return (
          project.languages.includes(find.toUpperCase()) ||
          project.typeOfWork.includes(find.toUpperCase())
        );
      });
      setFilteredProjects(filteredData);
    } else {
      setFilteredProjects(projects);
    }
  }, [find, projects]);

  return (
    <div className="searchProjectPage">
      <div className="searchProjectTitle">
        <h2>Buscar Projeto</h2>
        <input
          type="text"
          value={find}
          onChange={(e) => {
            setfind(e.target.value);
          }}
        />
      </div>
      <div className="projectMap">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project._id}
            project={project.project}
            site={project.site}
            instagram={project.instagram}
            linkedin={project.linkedin}
            summary={project.summary}
            typeOfWork={project.typeOfWork}
            languages={project.languages}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchProject;

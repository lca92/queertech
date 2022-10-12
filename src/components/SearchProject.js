import "./SearchProject.css";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const SearchProject = () => {
  const [projects, setProject] = useState([]);
  const [search, setSearch] = useState(false);

  const getProjects = async () => {
    const { data } = await axios.get(
      "https://ironrest.herokuapp.com/queerTechProjects"
    );
    setProject(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="searchProjectPage">
      <div className="searchProjectTitle">
        <h2>Buscar Projeto</h2>
      </div>
      <div className="projectMap">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            project={project.project}
            site={project.site}
            instagram={project.instagram}
            linkedin={project.linkedin}
            summary={project.summary}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchProject;

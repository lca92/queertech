import ProjectForm from "../ProjectForm";
import SideMenu from "../SideMenu";
import "./Project.css";

const Project = () => {
  return (
    <div className="newProjectPage">
      <div>
        <ProjectForm />
      </div>
      <div>
        <SideMenu />
      </div>
    </div>
  );
};

export default Project;

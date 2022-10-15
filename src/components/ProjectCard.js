import "./ProjectCard.css";
import linkedinIcon from "../img/linkedinIcon.png";
import siteIcon from "../img/siteIcon.png";
import instagramIcon from "../img/instagramIcon.png";

const ProjectCard = ({
  project,
  site,
  linkedin,
  instagram,
  summary,
  typeOfWork,
  languages,
}) => {
  return (
    <div className="projectCard">
      <h4>{project}</h4>
      <div className="project">
        <p>{summary}</p>
      </div>
      <div className="span">
        <p>{typeOfWork.map((element,index) => {
          return(
          <span key = {index}>  {element}   |</span>
          )
        })}
        </p>
        <p>{languages.map((element,index) => {
          return(
          <span key = {index}>  {element}   |</span>
          )
        })}
        </p>
      </div>
      <div className="projectIcons">
      <a href={site}>
          <img src={siteIcon} className="siteIcon" />
        </a>
        <a href={linkedin}>
          <img src={linkedinIcon} className="linkedinIcon" />
        </a>
        <a href={instagram}>
          <img src={instagramIcon} className="instagramIcon" />
        </a>
      </div>
        <hr/>
    </div>
    
  );
};

export default ProjectCard;

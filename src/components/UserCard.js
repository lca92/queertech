import "./UserCard.css";
import githubIcon from "../img/githubIcon.png";
import linkedinIcon from "../img/linkedinIcon.png"
import portfolioIcon from "../img/portfolioIcon.png"

const UserCard = ({
  name,
  github,
  linkedin,
  portfolio,
  typeOfWork,
  languages,
}) => {
  return (
    <div className="professionalCard">
      <h4>{name}</h4>
      <p>
        {" "}
        {typeOfWork.map((element, index) => {
          return <span key={index}>  {element}   |</span>;
        })}
      </p>
      <p>
        {" "}
        {languages.map((element, index) => {
          return <span key={index}>  {element}   |</span>;
        })}
      </p>
      
      <div className="icons">
        <a href={github}>
          <img src={githubIcon} alt="Github Icon" className="githubIcon" />
        </a>
        <a href={linkedin}>
          <img src={linkedinIcon} alt="Linkedin Icon"className="linkedinIcon" />
        </a>
        <a href={portfolio}>
          <img src={portfolioIcon} alt="Portfolio Icon" className="portfolioIcon" />
        </a>
      </div>
      <hr/>
    </div>
  );
};

export default UserCard;

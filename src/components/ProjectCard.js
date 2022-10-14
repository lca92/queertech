import './ProjectCard.css'

const ProjectCard = ({project, site, linkedin, instagram, summary, typeOfWork, languages}) => {
  return (
    <div className='projectCard'>
        <h4>Projeto: {project}</h4>
        <p>Site: {site}</p>
        <p>LinkedIn: {linkedin}</p>
        <p>Instagram: {instagram}</p>
        <p>Resumo: {summary}</p>
        {/* <p>Tipos de Trabalho:  {typeOfWork.map((element,index) => {
          return(
          <span key = {index}>{element}</span>
          )
        })}
        </p>
        <p>Linguagens: {languages.map((element,index) => {
          return(
          <span key = {index}>{element}</span>
          )
        })}
        </p> */}
    </div>
  )
}

export default ProjectCard
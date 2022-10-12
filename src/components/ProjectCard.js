import React from 'react'
import './ProjectCard.css'

const ProjectCard = (props) => {
  return (
    <div className='projectCard'>
        <h4>Projeto: {props.project}</h4>
        <p>Site: {props.site}</p>
        <p>LinkedIn: {props.linkedin}</p>
        <p>Instagram: {props.instagram}</p>
        <p>Resumo: {props.summary}</p>
    </div>
  )
}

export default ProjectCard
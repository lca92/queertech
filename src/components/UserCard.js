import React from 'react'
import './UserCard.css'

const UserCard = ({name, github, linkedin, portfolio, typeOfWork, languages}) => {
  return (
    <div className='professionalCard'>
        <h4>Nome: {name}</h4>
        <p>Github: {github}</p>
        <p>LinkedIn: {linkedin}</p>
        <p>Portfólio: {portfolio}</p>
        <p>Tipos de Trabalho:  {typeOfWork.map((element,index) => {
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
        </p>
    </div>
  )
}

export default UserCard
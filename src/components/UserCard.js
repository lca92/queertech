import React from 'react'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='professionalCard'>
        <h4>Nome: {props.name}</h4>
        <p>Github: {props.github}</p>
        <p>LinkedIn: {props.linkedin}</p>
        <p>Portfólio: {props.portfolio}</p>
    </div>
  )
}

export default UserCard
import React from 'react'
import '../styles/card.css';
import Like from './Like';

const Card = ({ Name, Date, Description, GrpName}) => {
    
  return (
    <div className='card'>
      <Like></Like>
      <h2>{Name} | {Date}</h2>
      <p>{Description}</p>
      <p>{GrpName}</p>
    </div>
  )
}

export default Card
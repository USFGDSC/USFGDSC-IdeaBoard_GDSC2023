import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/card.css';
import Like from './Like';

const Card = ({ id, Name, Date, Description, GrpName}) => {
    
  return (
   
    <div className='card'>
      <Like></Like>
      <Link  to={`/view/${id}`} >
        <h2>{Name} | {Date}</h2>
        <p>{Description}</p>
        <p>{GrpName}</p>
      </Link>
    </div> 
   
  )
}

export default Card
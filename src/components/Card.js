import React from 'react'
const Card = ({ Name, Description, GrpName}) => {
    
  return (
    <div >{Name}, {Description}, {GrpName}</div>
  )
}

export default Card
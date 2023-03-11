import React from 'react'
import '../styles/card.css';
import Like from './Like';


const Card = ({ Name, Date, Description, GrpName, Tags}) => {
  // display tags to screen
  let tagElements = null;

  if (Tags && Tags.length > 0) {
    tagElements = Tags.map((tag, index) => (
      <div key={index} className="card__tag-container">
        <span className="card__tag">{tag}</span>
      </div>
    ));
  }


  return (
    <div className='card'>
      {/* <Like></Like> */}
      <h2>{Name} | {Date}</h2>
      <p>{Description}</p>
      <p>{GrpName}</p>
      {tagElements}
    </div>
  )
}

export default Card;
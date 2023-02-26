import React from 'react';
import '../styles/card.css';

const Header = () => {
  return (
    <div className="header">
       
    <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/small-logo.png" alt="Logo" className="logo" />
      
      <button className="button home-button">Home</button>
      <button className="button ideas-button">Ideas</button>
    </div>
  );
};

export default Header;
import React, { useState } from 'react';
import '../styles/card.css';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"
import { auth } from "../firebase";
import {signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();
  const {err,seterr} = useState(false);
  const { currentUser } = useContext(AuthContext);
  const handleClick=()=>{
    try {
      Navigate("/login");
    } catch (error) {
      seterr(true);
    }
  }

  return (
    <div className="header">
      <img
        src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/small-logo.png"
        alt="Logo"
        className="logo"
      />

      <button className="button home-button">Home</button>
      {currentUser && <button className="button ideas-button">Ideas</button>}
      {currentUser===null && <button className="button logout" onClick={handleClick}>Signin</button> /*Navigate to login*/}    
      {currentUser && <button className="button logout" onClick={()=>signOut(auth)}>logout</button>}
      {err && <span>An error occured</span>}
    </div>
  );
};

export default Header;
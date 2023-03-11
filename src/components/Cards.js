import React, { useEffect } from 'react'
import {db} from '../firebase'
import Card from './Card';
import { useState } from "react";
import '../styles/card.css';


const Cards = () => {
    const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("Projects").onSnapshot((snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDocuments(documents);
    });
    return unsubscribe;
  }, []);

  console.log(documents)
  return (
    <div className='card-container'>
    
    {documents.map((document) => (
      
        <Card className="card-container" key={document.id} id={document.id} Date={document.date} Name={document.ideaName} Description={document.ideaDescription} GrpName={document.GroupName}></Card>
        
      )
      
    )}
    </div>
  )
}

export default Cards
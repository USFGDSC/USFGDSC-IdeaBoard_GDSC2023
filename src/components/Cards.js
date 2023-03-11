import React, { useEffect } from 'react'
import {db} from '../firebase'
import Card from './Card';
import { useState } from "react";
import '../styles/card.css';
import Header from './Header';


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

  return (
    <div className='card-container'>
    
    {documents.map((document) => (
      
        <Card className="card-container" key={document.id} Date={document.date} Name={document.ideaName} Description={document.ideaDescription} GrpName={document.GroupName} Tags={document.tags}></Card>

        
      )
      
    )}
    </div>
  )

}

export default Cards
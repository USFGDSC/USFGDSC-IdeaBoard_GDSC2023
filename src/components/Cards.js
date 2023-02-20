import React, { useEffect } from 'react'
import {db} from '../firebase'
import Card from './Card';
import { useState } from "react";


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
    
    documents.map((document) => (
        <Card key={document.id} Name={document.Name} Description={document.Description} GrpName={document.GroupName}></Card>
      )
      
    )
 
  )
}

export default Cards
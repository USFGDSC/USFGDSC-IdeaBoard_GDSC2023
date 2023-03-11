import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {db} from '../firebase'
import "../styles/OpenCard.css"


const OpenCard = () => {
    const {id} = useParams()
    
    const [project, setProject] = useState(null);

    const [ideaName, setIdeaName] = useState('Name');
    const [GroupName, setGroupName] = useState('GrpName');

    const [ideaDescription, setIdeaDescription] = useState('Desc');
    const [date, setDate] = useState('date');

    useEffect(() => {
      const fetchProject = async () => {
        const projectRef = db.collection('Projects').doc(id);
        const doc = await projectRef.get();
        if (doc.exists) {
          setProject(doc.data());
          setIdeaName(doc.data().ideaName)
          setGroupName(doc.data().GroupName)
          setDate(doc.data().date)
          setIdeaDescription(doc.data().ideaDescription)

          
        } else {
          console.log('No such document!');
        }
      };
      fetchProject();
    }, [id]);

    

  return (
    <div className="big-card-container">
        <div className="big-card">
            <h2>{ideaName} | {date}</h2>
            <h1>{GroupName}</h1>
            <p>{ideaDescription}</p>
        </div>
  </div>
  )
}

export default OpenCard
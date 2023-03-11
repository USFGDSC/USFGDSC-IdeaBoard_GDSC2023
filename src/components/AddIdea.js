import React, { useState } from 'react';
import '../styles/AddIdea.css';
import {db} from '../firebase'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


function AddIdea() {
  const [ideaName, setIdeaName] = useState('');
  const [GroupName, setGroupName] = useState('');

  const [ideaDescription, setIdeaDescription] = useState('');
  const [date, setDate] = useState('');

  const [rawTag, setTag] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Idea Name:', ideaName);
    console.log('Idea Description:', ideaDescription);
    console.log('Date:', date);
    
    // Split the tag string into an array of substrings
    const tags = rawTag.split(',').map(substring => substring.trim());

    // Remove any empty substrings
    const filteredTags = tags.filter(substring => substring !== '');



    // Add the form data to a Firestore collection
    await db.collection('Projects').add({
      ideaName, 
      ideaDescription,
      date,
      GroupName,
      tags: filteredTags
    });

    // Reset the form fields
    setIdeaName('');
    setIdeaDescription('');
    setDate('');

    setTag('');

    

  }

  return (
    <form onSubmit={handleSubmit} className="idea-form">
      <label className="idea-form__label">
        Idea Name:
        <input type="text" value={ideaName} onChange={(event) => setIdeaName(event.target.value)} className="idea-form__input" />
      </label>
      <br/>
      <label className="idea-form__label">
        Group Name:
        <input type="text" value={GroupName} onChange={(event) => setGroupName(event.target.value)} className="idea-form__input" />
      </label>
     
      <br />
      <label className="idea-form__label">
        Idea Description:
        <textarea value={ideaDescription} onChange={(event) => setIdeaDescription(event.target.value)} className="idea-form__textarea" />
      </label>
      <br />
      <label className="idea-form__label">
        Date:
        <input type="date" value={date} onChange={(event) => setDate(event.target.value)} className="idea-form__input" />
      </label>
      <br />
      <label className="idea-form__label">
        Tags:
        <input type="text" value={rawTag} onChange={(event) => setTag(event.target.value)} className="idea-form__input" />
      </label>
      <br />

      <button type="submit" className="idea-form__button">Submit</button>
    </form>
  );
}

export default AddIdea;

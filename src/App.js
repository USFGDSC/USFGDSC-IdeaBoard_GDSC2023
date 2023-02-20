import React, { useEffect, useState } from "react";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { db } from "./firebase";




function App() {
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
    <div>
      {documents.map((document) => (
        <div key={document.id}>
          <h2>{document.Name}</h2>
        </div>
      ))}
    </div>
  );
}




export default App;

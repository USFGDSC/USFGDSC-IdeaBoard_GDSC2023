import React, { useEffect, useState } from "react";

//CODE BREAKS IF THIS GETS DELETED
import "firebase/compat/firestore";

import Cards from "./components/Cards";
import Header from "./components/Header";




function App() {
  

  return (
      <>
      <Header></Header>
      <Cards></Cards>
      </>
  );
}




export default App;

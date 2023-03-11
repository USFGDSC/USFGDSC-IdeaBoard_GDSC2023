import "./styles/home.scss";
import "./styles/register.scss";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";

import Header from "./components/Header";
import AddIdea from "./components/AddIdea";
import OpenCard from "./components/OpenCard";




import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";





function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"> 
            <Route 
            index 
            element={<Cards />}
            />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="addIdea" element={<AddIdea></AddIdea>}></Route>
            <Route path="view/:id" element={<OpenCard></OpenCard>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

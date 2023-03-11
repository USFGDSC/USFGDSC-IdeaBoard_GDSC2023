import "./styles/home.scss";
import "./styles/register.scss";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";

import Header from "./components/Header";
import AddIdea from "./components/AddIdea";





function App() {
  return (
    <>
    <Header></Header>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
                <Cards />
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="addIdea" element={<AddIdea></AddIdea>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

import About from "./About";
import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import Home from "./Home";

import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("black");
      document.body.style.backgroundColor = "#073880";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          home="Home"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Routes>
          <Route path="/" element={<Home mode={mode}/>}></Route>
          <Route path="/about" element={<About />}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

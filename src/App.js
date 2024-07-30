import "./App.css";
import Navigationbar from "./components/Navbar";
import Form from "./components/Form";
import About from "./components/About";
import Home from "./components/Home";
import Test from "./components/test";
import React, { useState } from "react";
// import TasselCount from "./components/TasselCount";
import FileUpload from "./components/FileUpload";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

function App() {
  const [mode, setMode] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const [textColor, setTextColor] = useState("text-dark");

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  // const [btnText, setBtnText] = useState("Enable dark mode");
  const [btnText, setBtnText] = useState("Enable Darkmode");


  const toggleMode = () => {
    if (mode == "dark") {
      setMode("light");
      setTextColor("text-dark");
      setBtnText("Enable Darkmode");
      localStorage.setItem("theme", "light");
    } else {
      setMode("dark");
      setTextColor("text-light");
      setBtnText("Disable Darkmode");
      localStorage.setItem("theme", "dark");
    }
  };
  let toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      // setBtnText("Enable dark mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      // setBtnText("Enable light mode");
    }
  };

  const Pages = styled.div`
  width: 100vw;
  
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
   
  }
`;

  return (
    <>
      <Navigationbar
        title="Wheat Crop Portal"
        mode={mode}
        toggleMode={toggleMode}
        textColor={textColor}
        toggleStyle={toggleStyle}
        btnText={btnText}
      />
      <Pages>
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            {/* <Route path="/Predictor" element={<FileUpload />}></Route> */}
            <Route path="/Predictor" element={<Test />}></Route>
            <Route path="/Comments" element={<Form />}></Route>
          </Routes>
        </div>
      </Pages>
    </>
  );
}

export default App;

import React, { useState } from "react";

export default function Form(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked")
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    // console.log("Lowercase was clicked")
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearlstClick = () => {
    // console.log("Lowercase was clicked")
    let newText = text.slice(0, -1);
    setText(newText);
  };
  const handleClearlstwClick = () => {
    // console.log("Lowercase was clicked")
    let lastIndex = text.lastIndexOf(" ");
    let newText = text.substring(0, lastIndex);
    setText(newText);
  };
  const handleClearClick = () => {
    // console.log("Lowercase was clicked")
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change")
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>Write Your Comments</h1>
        <div className="mb-3">
          <label htmlFor="myTextBox" className="form-label">
            {props.heading}
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myTextBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-secondary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-secondary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-secondary mx-1" onClick={handleClearlstClick}>
          Delete last letter
        </button>
        <button className="btn btn-secondary mx-1" onClick={handleClearlstwClick}>
          Delete last word
        </button>
        <button className="btn btn-secondary mx-1" onClick={handleClearClick}>
          Delete Text
        </button>
        <button className="btn btn-primary mx-5">
          Submit
        </button>
      </div>
      <div className="container my-3">
        <h2>Words and Characters Count</h2>
        <p className="text-white">{text.trim() === "" ? 0 : text.split(" ").length} words and {text.length} characters</p>
        {/* <p>{0.008 * text.split(" ").length} Minutes read</p> */}
        {/* <h3>Preview</h3>
        <p>{text}</p> */}
      </div>
    </>
  );
}

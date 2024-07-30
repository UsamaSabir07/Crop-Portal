import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
// const uploadData= async (formData)=>{
//   const res = await axios.post("http://172.16.18.74:8000/mlapi/", formData,
//           {headers: {
//           "Content-Type": "multipart/form-data"
//         }});
//   console.log(res.json())
// }
const FileUpload = () => {
  const [message, setMessage] = useState("");
  const [message1, setMessage1] = useState("");
  const [filepath, setFilepath] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleFileUpload = async (event) => {
    // get the selected file from the input
    const input_element = document.getElementById("image-upload-element");
    const file = input_element ? input_element.files[0] : "";
    const filepath = input_element ? input_element.value : "";
    if (file) {
      setFilepath(URL.createObjectURL(file));
      setSubmit(true)
    }
    console.log(filepath)
    // create a new FormData object and append the file to it
    const formData = new FormData();
    formData.append("file", file);
    // uploadData(formData);
    // make a POST request to the File Upload API with the FormData object and Rapid API headers
    await axios
      .post("http://172.16.18.74:8000/detect/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(async (response) => {
        // handle the response
        console.log(response);
        setMessage(response.data.predictedCount);
        setMessage1(response.data.annotatedBoxes);
        return await axios.post("http://localhost:5000/api/data", response.data, {
          headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          }
        })
      })
      .catch((error) => {
        // handle errors
        console.log(error);
        console.log("Zain");
      });
  };

  // render a simple input element with an onChange event listener that calls the handleFileUpload function
  return (
    <>
      <h1 className="text-center">Wheat Detection and Count Predictor</h1>
      <div className="d-flex align-items-center justify-content-center flex-column mt-4" style={{ height: "100%" }}>
        <div className="d-flex align-items-center justify-content-center flex-column w-40 mt-3 p-2 rounded border border-white" style={{ maxWidth: "400px", backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
          <h3 className="text-center mb-3">Please upload image</h3>
          <input className="btn btn-dark mb-3" id="image-upload-element" type="file" accept=".jpeg, .png, .jpg" onChange={(event) => { setFilepath(event.target.files[0]) }} />
          {filepath && <button className="btn btn-primary mb-3" onClick={handleFileUpload}>Submit</button>}
          {
            filepath ?
              <div>

                <div></div>
                {submit ? <img src={filepath} className="w-100" /> : ""}
                {message ?
                  <div>
                    <h2 className="mt-3" style={{ fontFamily: "fantasy" }}>Tassel Count: {message}</h2>
                  </div> : ""
                }
              </div> : ""
          }
        </div>
      </div>
    </>
  );
};
export default FileUpload;

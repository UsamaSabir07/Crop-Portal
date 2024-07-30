import React from "react";
import axios from "axios";
import { useState } from 'react';
import MultipleImages from "./MultipleImages";
// const uploadData= async (formData)=>{
//   const res = await axios.post("http://172.16.18.74:8000/mlapi/", formData,
//           {headers: {
//           "Content-Type": "multipart/form-data"
//         }});
//   console.log(res.json())
// }
const Test = () => {
  const [message, setMessage] = useState("");
  const [filepath, setFilepath] = useState("");
  const [submit, setSubmit] = useState(false);
  const [result, setResult] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [showSingle, setShowSingle] = useState(true);
  const [showMultiple, setShowMultiple] = useState(false);

  const handleFileUpload = async (event) => {
    setShowSpinner(true)
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
      .post("http://172.16.18.74:8000/test/", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
      })
      .then(async (response) => {
        // handle the response
        console.log(response);
        setResult(response.data)
        setMessage(response.data.predictedCount);
        setShowSpinner(false)
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
        setShowSpinner(false)
      });
  };


  return (
    <>
      <h1 className="text-center">Wheat Detection and Count Predictor</h1>
      <div class="d-grid gap-2 col-lg-4 col-sm-2 mx-auto mt-3" style={{ width: "330px" }}>
        <button class="btn btn-primary" type="button" onClick={() => (setShowSingle(true), setShowMultiple(false))}>Switch to Single Image Mode</button>
        <button class="btn btn-primary" type="button" onClick={() => (setShowSingle(false), setShowMultiple(true))}>Switch to Multiple Images Mode</button>
      </div>
      {showSingle ? <div className="d-lg-flex d-sm-block align-items-center justify-content-center">
        <div className="d-flex align-items-center justify-content-center flex-column mt-4" style={{ height: "100%" }}>
          <div className="d-flex align-items-center justify-content-center flex-column w-40 mt-3 p-2 rounded border border-white" style={{ maxWidth: "500px", backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
            <span className="w-100"><h3 className="text-center mb-3">Please Upload Image</h3>

              <hr className="divider" /></span>
            <input className="btn btn-dark mb-3" id="image-upload-element" type="file" accept=".jpeg, .png, .jpg, .tif" onChange={(event) => { setFilepath(event.target.files[0]) }} />
            {filepath && <button className="btn btn-primary mb-3" onClick={handleFileUpload}>
              {showSpinner && <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>}
              Submit
            </button>}
            {
              filepath ?
                <div>

                  <div></div>
                  {submit ? <img src={filepath} className="w-100" /> : ""}
                  {/* {message ?
                  <div>
                    <h2 className="mt-3" style={{ fontFamily: "fantasy" }}>Tassel Count: {message}</h2>
                  </div> : ""
                }
                {result.pred_img &&
                  <>
                    <h2 className="mt-3" style={{ fontFamily: "fantasy" }}>Predicted Image:</h2>
                    <img src={`data:image/jpeg;base64,${result.pred_img}`} className="w-100" />
                  </>
                } */}
                </div>


                : ""
            }
          </div>
        </div>
        {message ? <div className="d-flex align-items-center justify-content-center flex-column mt-4 ms-lg-5" style={{ height: "100%" }}>
          <div className="d-flex align-items-center justify-content-center flex-column w-40 mt-3 p-2 rounded border border-white" style={{ maxWidth: "500px", backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
            {
              filepath ?
                <div>

                  {message ?
                    <div>
                      <h3 className="text-center mb-3">Output</h3>
                      <hr />
                      <div></div>
                      <h2 className="mt-3" style={{ fontFamily: "fantasy" }}>Tassel Count: {message}</h2>
                    </div> : ""
                  }
                  {result.pred_img &&
                    <>
                      <h2 className="mt-3 pb-3" style={{ fontFamily: "fantasy" }}>Predicted Image:</h2>
                      <img src={`data:image/jpeg;base64,${result.pred_img}`} className="w-100" />
                    </>
                  }
                </div> : ""
            }
          </div>
        </div> : ""}
      </div> : showMultiple ? <MultipleImages /> : ""}
    </>
  );
};
export default Test;

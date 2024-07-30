import React from "react";
import axios from "axios";
import { useState } from 'react';
// const uploadData= async (formData)=>{
//   const res = await axios.post("http://172.16.18.74:8000/mlapi/", formData,
//           {headers: {
//           "Content-Type": "multipart/form-data"
//         }});
//   console.log(res.json())
// }
const MultipleImages = () => {
    const [message, setMessage] = useState("");
    const [filepath, setFilepath] = useState("");
    const [submit, setSubmit] = useState(false);
    const [result, setResult] = useState("");
    const [showSpinner, setShowSpinner] = useState(false);

    const handleFileUpload = async (event) => {
        setShowSpinner(true);
        // Get the selected files from the input
        const inputElement = document.getElementById("image-upload-element");
        const files = inputElement ? inputElement.files : [];
        if (files.length > 0) {
            // Create a new FormData object and append each file to it
            const formData = new FormData();
            Array.from(files).forEach(file => {
                formData.append("file", file);
            });
    
            // Display the first file's URL for preview (if needed)
            setFilepath(URL.createObjectURL(files[0]));
            setSubmit(true);
    
            console.log(files);
            
            // Make a POST request to the File Upload API with the FormData object
            try {
                const response = await axios.post("http://172.16.18.74:8000/testmultiple/", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                });
                
                // Handle the response
                console.log(response);
                setResult(response.data);
                setMessage(response.data.totalPredictedCount);
                setShowSpinner(false);
    
                // Make a second POST request with the response data
                await axios.post("http://localhost:5000/api/data", response.data, {
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                    }
                });
            } catch (error) {
                // Handle errors
                console.error(error);
                setShowSpinner(false);
            }
        } else {
            console.log("No files selected.");
            setShowSpinner(false);
        }
    };


    return (
        <>
            <div className="d-lg-flex d-sm-block align-items-center justify-content-center">
                <div className="d-flex align-items-center justify-content-center flex-column mt-4" style={{ height: "100%" }}>
                    <div className="d-flex align-items-center justify-content-center flex-column w-40 mt-3 p-2 rounded border border-white" style={{ maxWidth: "500px", backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                        <span className="w-100">
                            <h3 className="text-center mb-3 mt-2">Please Upload Multiple Images</h3>
                            <hr className="divider" />
                        </span>
                        <input className="btn btn-dark mb-3" id="image-upload-element" type="file" accept=".jpeg, .png, .jpg, .tif" multiple onChange={(event) => { setFilepath(event.target.files[0]) }} />
                        {filepath && <button className="btn btn-primary mb-3" onClick={handleFileUpload}>
                            {showSpinner && <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>}
                            Submit
                        </button>}
                        {/* {
                            filepath ?
                                <div>

                                    <div></div>
                                    {submit ? <img src={filepath} className="w-100" /> : ""}
                                </div>
                                : ""
                        } */}
                    </div>
                </div>
                {message ? <div className="d-flex align-items-center justify-content-center flex-column mt-4 ms-lg-5" style={{ height: "100%" }}>
                    <div className="d-flex align-items-center justify-content-center flex-column w-40 mt-3 p-2 rounded border border-white" style={{ maxWidth: "500px", backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                        {
                            filepath ?
                                <div>

                                    {message ?
                                        <div className="px-2">
                                            <h3 className="text-center mb-3">Output</h3>
                                            <hr />
                                            <h3 className="mt-2" style={{ fontFamily: "fantasy" }}>Total Predicted Tassle Count: {message}</h3>
                                            <h3 className="mt-2" style={{ fontFamily: "fantasy" }}>Weight in grams: {result.totalYieldEstimation} g</h3>
                                            <h3 className="mt-2" style={{ fontFamily: "fantasy" }}>Weight in Kilograms: {result.totalYieldEstimation / 1000} kg</h3>
                                        </div> : ""
                                    }
                                </div> : ""
                        }
                    </div>
                </div> : ""}
            </div>
        </>
    );
};
export default MultipleImages;

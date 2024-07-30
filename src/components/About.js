import React from "react";

export default function About(props) {


  return (
    <div className="container" style={props.myStyle}>
      <h1 className="text-center my-3">About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={props.myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={props.myStyle}
            >
              <strong>Team</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={props.myStyle}>
              <strong>Dr. Rana Fayyaz Ahmad</strong> (Deputy Chief Manager Technical)
              <br />
              <strong>Syed Zain ul Abidin</strong> (Assistant Manager Technical)
              <br />
              <strong>Ahsen Nazir</strong> (Assistant Manager Technical)
              <br />
              <strong>Usama Bin Sabir</strong> (Assistant Manager Technical)
              <br />
              <strong>Muhammad Shakil</strong> (Assistant Manager Technical)
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={props.myStyle}
            >
              <strong>Contact</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={props.myStyle}>
              <strong>Email : </strong><a href="mailto:zainulabidin@ncp.edu.pk">zainulabidin@ncp.edu.pk</a>
              <br />
              &emsp;&emsp;&emsp; <a href="mailto:ahsen.nazir@ncp.edu.pk">ahsen.nazir@ncp.edu.pk</a>
              <br />
              &emsp;&emsp;&emsp; <a href="mailto:usama.sabir@ncp.edu.pk">usama.sabir@ncp.edu.pk</a>
              <br />
              &emsp;&emsp;&emsp; <a href="mailto:muhammad.shakil@ncp.edu.pk">muhammad.shakil@ncp.edu.pk</a>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={props.myStyle}
            >
              <strong>Location</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={props.myStyle}>
              <strong>Address : </strong><a href="https://maps.app.goo.gl/pJPteLwbcZSXmAuw7" target="_blank">CoE AITeC, NCP Shahdara Valley Road, Islamabad.</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <button onClick={props.toggleStyle} type="button" className="btn btn-dark my-3">
          {props.btnText}
        </button> */}
      </div>
    </div>
  );
}

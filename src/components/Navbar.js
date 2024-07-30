import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Navigationbar(props) {
  return (
    // <nav
    //   className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    // >
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="/">
    //       {props.title}
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav m-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <NavLink
    //             to="/" exact
    //             className="nav-link"
    //             activeClassName="active"
    //           >
    //             Home
    //           </NavLink>
    //         </li>
    //         {/* <li className="nav-item">
    //           <NavLink
    //             to="/Predictor"
    //             className="nav-link"
    //             activeClassName="active"
    //           >
    //             Predictor
    //           </NavLink>
    //         </li> */}
    //         <li className="nav-item">
    //           <NavLink
    //             to="/Predictor"
    //             className="nav-link"
    //             activeClassName="active"
    //           >
    //             Predictor
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink
    //             to="/About"
    //             className="nav-link"
    //             activeClassName="active"
    //           >
    //             About
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink
    //             to="/Comments"
    //             className="nav-link"
    //             activeClassName="active"
    //           >
    //             Comments
    //           </NavLink>
    //         </li>
    //       </ul>
    //       {/* <form className="d-flex" role="search">
    //         <input
    //           className="form-control me-2"
    //           type="search"
    //           placeholder="Search"
    //           aria-label="Search"
    //         />
    //         <button className="btn btn-outline-success" type="submit">
    //           Search
    //         </button>
    //       </form> */}
    //       <div className={`form-check form-switch ${props.textColor} mx-2`}>
    //         <input
    //           className="form-check-input"
    //           type="checkbox"
    //           role="switch"
    //           id="flexSwitchCheckDefault"
    //           checked = {props.mode == "dark" ? true : false}
    //           onClick={() => {
    //             props.toggleMode();
    //             props.toggleStyle();
    //           }}
    //         />
    //         <label className={`form-check-label text-light ${props.mode == "dark" ? "text-light" : "text-dark"}`} for="flexSwitchCheckDefault">
    //           {props.mode == "dark" ? "Disable Darkmode" : "Enable Darkmode"}
    //         </label>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <Navbar collapseOnSelect expand='lg' sticky="top" className={`bg-${props.mode}`} variant={props.mode == "dark" ? "dark" : "light"}>
      <Container fluid>
        <Navbar.Brand href="/">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
          className={`bg-${props.mode} text-light ${props.mode == "dark" ? "text-light" : "text-dark"}`}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
            {props.title}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1">
              <Nav.Link href="/">
                <NavLink
                  to="/" exact
                  className="nav-link"
                  activeClassName="active"
                  style={{ padding: "0px" }}
                >
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link href="/Predictor">
                <NavLink
                  to="/Predictor"
                  className="nav-link"
                  activeClassName="active"
                  style={{ padding: "0px" }}
                >
                  Predictor
                </NavLink>
              </Nav.Link>
              <Nav.Link href="/About">
                <NavLink
                  to="/About"
                  className="nav-link"
                  activeClassName="active"
                  style={{ padding: "0px" }}
                >
                  About
                </NavLink>
              </Nav.Link>
              <Nav.Link href="/Comments">
                <NavLink
                  to="/Comments"
                  className="nav-link"
                  activeClassName="active"
                  style={{ padding: "0px" }}
                >
                  Comments
                </NavLink>
              </Nav.Link>
              {/* <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#action2">Comments</Nav.Link> */}
              {/* <NavDropdown
                title="Dropdown"
                id="offcanvasNavbarDropdown-expand-lg"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <div className="form-check form-switch mx-2 mt-2">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                checked={props.mode == "dark" ? true : false}
                onChange={() => {
                  props.toggleMode();
                  props.toggleStyle();
                }}
              />
              <label className={`form-check-label text-light ${props.mode == "dark" ? "text-light" : "text-dark"}`} for="flexSwitchCheckDefault">
                {props.mode == "dark" ? "Disable Darkmode" : "Enable Darkmode"}
              </label>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

Navbar.propTypes = { title: PropTypes.string };

Navbar.defaultProps = {
  title: "Wheat Portal",
};

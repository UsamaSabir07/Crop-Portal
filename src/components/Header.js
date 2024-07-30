import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import video from '../media/cropvideo.mp4'
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <video autoPlay muted loop className="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbar className="header-overlay" variant="dark">
        <Container className='text-center'>
          {/* <Navbar.Brand href="#home">My Video Header</Navbar.Brand> */}
          <h1>AITeC Crop Portal</h1>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

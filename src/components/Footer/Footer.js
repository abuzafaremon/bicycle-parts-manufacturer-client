import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='text-center py-5 bg-grd'>
      <Container>
        <div className='d-flex justify-content-center gap-2 mb-3'>
          <Link to='' className='nav-link' href="#">About Us</Link>
          <Link to='' className='nav-link' href="#">Contact</Link>
          <Link to='' className='nav-link' href="#">Career</Link>
        </div>
        <div className='d-flex justify-content-center gap-2 mb-3'>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaGithub />
          <FaLinkedinIn />
        </div>
        <p>&copy; 2022 | Bicycle World All right reserved</p>
      </Container>
    </footer>
  );
};

export default Footer;
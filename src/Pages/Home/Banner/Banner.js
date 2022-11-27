import React from 'react';
import './Banner.css';
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className='hero'>
      <div className="overlay">
        <Container>
          <div id='hero' className="d-flex flex-column justify-content-center align-items-center">
            <h2>Welcome to Bicycle World</h2>
            <p className="lead">
              Here we provide any kind of parts/tools, gears or accessories for Bicycle
            </p>

            <Link className='btn btn-grd border-0' to='/login'>Get Started</Link>

          </div>
        </Container>
      </div>
    </section>
  )
}

export default Banner;
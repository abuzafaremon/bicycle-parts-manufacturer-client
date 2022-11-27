import React from 'react';
import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import member1 from '../../../assets/images/member-1.png';
import member2 from '../../../assets/images/member-2.png';
import './Team.css';

const Location = () => {
  return (
    <section className='py-2 py-sm-5'>
      <div className="container py-2 py-sm-5">
        <h2 className='text-center section-title'>Our Team</h2>
        <div className="row g-2 py-3">
          <div className="col-12 col-md-4">
            <h3>Meet Our
              Expert Team</h3>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fuga explicabo ex sapiente deserunt, officiis iste? Illo, nam error vero, incidunt vel ipsam omnis atque laboriosam quas placeat, aspernatur quam ut! Eveniet eaque harum a laudantium voluptatibus debitis libero mollitia nam praesentium architecto.
            </p>
            <button className="btn btn-grd border-0 text-light fw-bold">All Members</button>
          </div>
          <div className="col-12 col-sm-6 col-md-4 text-center member">
            <img className='w-100 rounded-1' src={member1} alt="" />
            <div className='member-info shadow-sm'>
              <h3>John Doe</h3>
              <p className="lead">Head Engineer</p>
              <div className="d-flex gap-2 justify-content-center">
                <Link to=''><FaFacebookF /></Link>
                <Link to=''><FaInstagram /></Link>
                <Link to=''><FaGithub /></Link>
                <Link to=''><FaLinkedinIn /></Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 text-center member">
            <img className='w-100 rounded-1' src={member2} alt="" />
            <div className='member-info shadow-sm'>
              <h3>John Doe</h3>
              <p className="lead">Head Engineer</p>
              <div className="d-flex gap-2 justify-content-center">
                <Link to=''><FaFacebookF /></Link>
                <Link to=''><FaInstagram /></Link>
                <Link to=''><FaGithub /></Link>
                <Link to=''><FaLinkedinIn /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
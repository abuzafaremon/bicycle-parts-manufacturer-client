import React from 'react';
import { Container } from 'react-bootstrap';
import './BusinessSummery.css';

const BusinessSummery = () => {
  return (
    <section className='py-5'>
      <Container>
        <h3 className='text-center'>Our Business Summery</h3>
        <div className="summaries bg-grd text-light w-50 m-auto rounded-4 p-3 d-flex justify-content-between align-items-center gap-2">
          <div className="summery text-center">
            <div className="fs-6">Total Customer</div>
            <div className="fw-bold fs-2">100+</div>
            <div className="opacity-75">Sep 1st - Oct 1st</div>
          </div>

          <div className="summery text-center">
            <div className="fs-6">Annual Revenue</div>
            <div className="fw-bold fs-2">125M+</div>
            <div className="opacity-75">↗︎ 400 (22%)</div>
          </div>

          <div className="summery text-center">
            <div className="fs-6">Total tools</div>
            <div className="fw-bold fs-2">50+</div>
            <div className="opacity-75">↘︎ 90 (14%)</div>
          </div>

          <div className="summery text-center">
            <div className="fs-6">Our client Review</div>
            <div className="fw-bold fs-2">35k+</div>
            <div className="opacity-75 ">↘︎ 90 (14%)</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BusinessSummery;
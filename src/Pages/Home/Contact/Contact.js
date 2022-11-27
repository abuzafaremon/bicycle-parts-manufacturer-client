import React from 'react';

const Contact = () => {
  return (
    <section className='py-5'>
      <div className="container">
        <h2 className='text-center section-title'>Contact Us</h2>
        <p className="lead text-center">Drop Us a Line</p>
        <div className="row">
          <div className="col-12 col-md-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex harum minus voluptas ipsam cumque, ullam facilis numquam blanditiis necessitatibus. Consequatur fugit et blanditiis! Earum optio harum corporis id recusandae possimus architecto qui omnis odio assumenda, modi rerum iste explicabo ab reiciendis necessitatibus voluptas rem. Quisquam modi dolor voluptas alias amet.
          </div>
          <div className="col-12 col-md-6">
            <form>
              <div className="d-lg-flex gap-2 mb-2">
                <input type="text" className="form-control mb-2 mb-lg-0" placeholder='Your Name' /><input type="email" className="form-control" placeholder='Your Email' />
              </div>
              <div className="d-lg-flex gap-2 mb-2">
                <input type="tel" className="form-control mb-2 mb-lg-0" placeholder='Your Phone' />
                <input type="text" className="form-control" placeholder='Your Subject' />
              </div>
              <textarea className='form-control mb-2' placeholder='Your Message'></textarea>
              <button type='Submit' className='btn btn-grd border-0 text-light form-control'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
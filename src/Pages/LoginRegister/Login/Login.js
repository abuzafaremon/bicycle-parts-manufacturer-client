import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
import { useForm } from 'react-hook-form'
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className='py-5'>
      <h2 className='text-center'>Please Login</h2>
      <Form className='border p-3 rounded shadow w-100 login' onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control {...register("email")}
            type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control {...register('password')} type="password" placeholder="Password" required />
        </Form.Group>
        <Link to=''>Forgot Password?</Link><br />
        <Button className='btn-grd border-0' type="submit">
          Login
        </Button>
        <Form.Group>
          <Form.Text >New to Bicycle World? <Link to='/register'>Register Now</Link></Form.Text>
        </Form.Group>
        <GoogleLogin />
      </Form>
    </section>
  )
}

export default Login;
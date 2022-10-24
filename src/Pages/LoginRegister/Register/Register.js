import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Register.css'


const Register = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className='py-5'>
      <h2 className="text-center">Please Register</h2>
      <Form className='border p-3 rounded shadow w-100 register' onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className='mb-3'>
          <Form.Control className='form-control'
            {...register("name", { required: true })}
            aria-invalid={errors.name ? "true" : "false"} placeholder='Name'
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {errors.name?.type === 'required' && <p role="alert" className='text-warning'>Name is required !</p>}

        <Form.Group className='mb-3'>
          <Form.Control className='form-control'
            {...register("mail", { required: "Email Address is required" })}
            aria-invalid={errors.mail ? "true" : "false"} placeholder='Email'
          />
        </Form.Group>
        {errors.mail && <p className='text-warning' role="alert">{errors.mail?.message}</p>}

        <Button className='btn-grd border-0' type="submit">
          Register
        </Button>
        <Form.Group>
          <Form.Text>Already have an account?</Form.Text>
          <Link to='/login'>Please Login</Link>
        </Form.Group>
      </Form>
    </section>
  )
}

export default Register;
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
import './Register.css';
import GoogleLogin from '../GoogleLogin/GoogleLogin';


const Register = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = async data => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name })
    reset()
  };
  return (
    <section className='py-5'>
      <h2 className="text-center">Please Register</h2>
      <Form className='border p-3 rounded shadow w-100 register' onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className='mb-3'>
          <Form.Control className='form-control' type='text'
            {...register("name", { required: true })}
            aria-invalid={errors.name ? "true" : "false"} placeholder='Name'
          />
        </Form.Group>
        {errors.name?.type === 'required' && <p role="alert" className='text-warning'>Name is required !</p>}

        <Form.Group className='mb-3'>
          <Form.Control className='form-control' type='email'
            {...register("email", { required: "Email Address is required" })}
            aria-invalid={errors.mail ? "true" : "false"} placeholder='Email'
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {errors.mail && <p className='text-warning' role="alert">{errors.mail?.message}</p>}
        <Form.Group className='mb-3'>
          <Form.Control className='form-control' type='password'
            {...register("password", { required: "Password is required" })}
            aria-invalid={errors.password ? "true" : "false"} placeholder='Password'
          />
        </Form.Group>
        {errors.password && <p className='text-warning' role="alert">{errors.password?.message}</p>}

        <Button className='btn-grd border-0' type="submit">
          Register
        </Button>
        <Form.Group>
          <Form.Text>Already have an account? <Link to='/login'>Please Login</Link></Form.Text>
        </Form.Group>
        <GoogleLogin />
      </Form>
    </section>
  )
}

export default Register;
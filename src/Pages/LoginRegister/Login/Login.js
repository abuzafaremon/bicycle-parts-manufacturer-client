import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useForm } from 'react-hook-form'
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
import Loading from '../../../components/Loading/Loading';
import swal from 'sweetalert';

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password)
    reset();
  };
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <Loading />
  }
  const forgotPassword = async () => {
    swal("Enter your email address: ", {
      content: {
        element: "input",
        attributes: {
          placeholder: "Your email",
          type: "email",
          required: 'required',
        },
      },
    })
      .then((value) => {
        let pattern = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if (value && value.match(pattern)) {
          sendPasswordResetEmail(value);
          swal("Good job!", "Password reset email sent", "success");
        } else {
          swal('', `${value} is not valid email`, 'warning')
        }
      });

  }

  return (
    <section className='py-5 login-page'>
      <div className="container">
        <Form className='border p-3 rounded shadow w-100 login' onSubmit={handleSubmit(onSubmit)}>
          <h2 className='text-center text-light mb-2'>Please Login</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Email</Form.Label> */}
            <Form.Control {...register("email")}
              type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control {...register('password')} type="password" placeholder="Password" required />
          </Form.Group>
          <span type='button' onClick={forgotPassword} className='nav-link text-warning'>Forgot Password?</span><br />
          <Button className='btn-grd border-0' type="submit">
            Login
          </Button>
          <Form.Group>
            <Form.Text className='text-light'>New to Bicycle World? <Link className='nav-link text-success d-inline' to='/register'>Register Now</Link></Form.Text>
          </Form.Group>
          <GoogleLogin />
        </Form>
      </div>
    </section>
  )
}

export default Login;
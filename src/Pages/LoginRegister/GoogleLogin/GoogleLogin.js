import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import auth from '../../../Firebase/Firebase.init';

const GoogleLogin = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  if (gLoading) {
    return <Loading />
  }
  if (gUser) {
    navigate('/');
  }
  return (
    <div className='py-2'>
      <div className='text-center'>----- OR -----</div>
      <Button onClick={() => signInWithGoogle()} className='btn-grd w-100 border-0'>Continue with Google</Button>
    </div>
  );
};

export default GoogleLogin;
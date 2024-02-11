import React from 'react';
import './RequireAuth.css'
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import Loading from '../../../components/Loading/Loading';
import auth from '../../../Firebase/Firebase.init';

const RequireAuth = ({ children }) => {

  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  const location = useLocation();
  if (loading || sending) {
    return <Loading />
  }
  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
  }


  if (user.providerData[0].providerId === 'password' && !user.emailVerified) {
    return <section className='py-5'>
      <div className="card shadow image-full mx-auto require-auth">
        <div className="card-body text-center text-light">
          <h2>Your Email is not verified!</h2>
          <p>Please verify your email address.</p>
          <div>
            <button onClick={async () => {
              await sendEmailVerification();
              swal('Your Verification Email Sent', "Check Your Email Inbox or Spam Folder", "success");
            }} className="btn btn-grd border-0">Send Verification Email</button>
          </div>
        </div>
      </div>
    </section>
  }
  return children;
};

export default RequireAuth;
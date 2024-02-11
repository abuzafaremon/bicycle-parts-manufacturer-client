import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import auth from '../../../Firebase/Firebase.init';
import google from '../../../assets/images/social/google.png'

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
      <div className='text-center text-light mb-2'>------- OR -------</div>
      <Button onClick={() => signInWithGoogle()} className='btn-grd w-100 border-0 d-flex align-items-center justify-content-center gap-2'>
        <img width={20} className='img-fluid' src={google} alt="google" />
        <span>Continue with Google</span>
      </Button>
      {gError?.message}
    </div>
  );
};

export default GoogleLogin;
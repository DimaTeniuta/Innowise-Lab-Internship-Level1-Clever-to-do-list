import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../api/firebase';

export const useAuth = () => {
  const { email, token, id } = useSelector((state) => state.user);
  const [user] = useAuthState(auth);

  return {
    isAuth: user,
    email,
    token,
    id,
  };
};

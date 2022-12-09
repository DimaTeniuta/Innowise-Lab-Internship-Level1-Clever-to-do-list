import { useSelector } from 'react-redux';
import { selectUser } from '../store/slices/userSlice';

export const useAuth = () => {
  const { email, token, id } = useSelector(selectUser);

  return {
    isAuth: !!token,
    email,
    token,
    id,
  };
};

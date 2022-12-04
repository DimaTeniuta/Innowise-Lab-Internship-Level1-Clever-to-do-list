import React from 'react';
import { auth } from '../../api/firebase';
import { FormSign } from '../../components/FormSign';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

export const SignInPage = () => {
  const [signInWithEmailAndPassword, user, loading] = useSignInWithEmailAndPassword(auth);

  return (
    <FormSign
      user={user}
      isSignUp={false}
      loading={loading}
      signFunc={signInWithEmailAndPassword}
    />
  );
};

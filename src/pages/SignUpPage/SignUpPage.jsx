import React from 'react';
import { FormSign } from '../../components/FormSign';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../api/firebase';

export const SignUpPage = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  return (
    <FormSign
      user={user}
      isSignUp={true}
      loading={loading}
      error={error}
      signFunc={createUserWithEmailAndPassword}
    />
  );
};

import { validateRule } from './formVariables';

export const validateMaxLength = (len) => (value) => value.length > +len ? len : '';

export const validateMinLength = (len) => (value) => value.length < +len ? len : '';

export const validateEmail = (len) => (value) => {
  return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(value)
    ? ''
    : len;
};

export const validatePassword = (len) => (value) => {
  return value.split('').every((password) => /^[a-zA-Z0-9]$/.test(password)) ? '' : len;
};

export const setMinMaxLengthError = (len) => {
  if (len === validateRule.PASSWORD_MIN_LENGTH) {
    return `can not be less than ${len} characters`;
  } else if (len && len.includes(validateRule.PASSWORD_RULE)) {
    return 'The password must contain only a-z, A-Z, 0-9';
  } else if (len && len.includes(validateRule.LOGIN_RULE)) {
    return 'The login must contain only a-z, A-Z, 0-9, -, _';
  } else if (len && len.includes(validateRule.EMAIL)) {
    return 'Enter the correct Email';
  }
  return ' ';
};

import { validateRule } from './formVariables';

export const validateMaxLength = (len) => (value) => value.length > +len ? len : '';

export const validateMinLength = (len) => (value) => value.length < +len ? len : '';

export const validatePassword = (len) => (value) => {
  return value.split('').every((password) => /^[a-zA-Z0-9]$/.test(password)) ? '' : len;
};

export const validateLogin = (len) => (value) => {
  return value.split('').every((login) => /^[a-zA-Z0-9-_]$/.test(login)) ? '' : len;
};

export const setMinMaxLengthError = (len) => {
  if (len === validateRule.REQUIRED_LENGTH || len === validateRule.PASSWORD_MIN_LENGTH) {
    return `can not be less than ${len} characters`;
  } else if (len === validateRule.MAX_LENGTH) {
    return `can not be larger than ${len} characters`;
  } else if (len && len.includes(validateRule.PASSWORD_RULE)) {
    return 'The password must contain only a-z, A-Z, 0-9';
  } else if (len && len.includes(validateRule.LOGIN_RULE)) {
    return 'The login must contain only a-z, A-Z, 0-9, -, _';
  }
  return ' ';
};

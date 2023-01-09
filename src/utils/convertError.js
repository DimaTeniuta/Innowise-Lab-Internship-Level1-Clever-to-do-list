import { errorAuthText, errorVariable } from './variables';

export const convertError = (err) => {
  switch (err) {
    case errorVariable.EMAIL_EXISTS:
      return errorAuthText.EMAIL_EXISTS;
    case errorVariable.NOT_FOUND:
      return errorAuthText.NOT_FOUND;
    case errorVariable.WRONG_PASSWORD:
      return errorAuthText.WRONG_PASSWORD;
    default:
      return errorAuthText.GENERAL_TEXT;
  }
};

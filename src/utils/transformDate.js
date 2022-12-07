export const transformDate = (date) => {
  return date.toLocaleDateString().replace(/\./g, '-');
};

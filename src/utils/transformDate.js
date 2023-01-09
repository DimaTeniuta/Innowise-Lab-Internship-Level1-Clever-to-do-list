export const transformDate = (date) => {
  return date.toLocaleDateString().replace(/\./g, '-');
};

export const transformCalendarDate = (date) => {
  if (typeof date === 'string') {
    const arrDate = date.split('');
    return `${arrDate.splice(6).join('')}-${arrDate.splice(4, 6).join('')}-${arrDate
      .splice(0, 4)
      .join('')}`;
  } else {
    return transformDate(new Date(date));
  }
};

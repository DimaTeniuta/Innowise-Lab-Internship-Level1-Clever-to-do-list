import { useEffect, useState } from 'react';
import { MONTH_LENGTH } from '../utils/variables';

export const useCalendar = (month = 0) => {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    const date = new Date();
    const arr = [date.setDate(date.getDate() + month * MONTH_LENGTH)];

    while (arr.length < MONTH_LENGTH) {
      arr.push(date.setDate(date.getDate() + 1));
    }
    setCalendar([...arr]);
  }, [month]);

  return calendar;
};

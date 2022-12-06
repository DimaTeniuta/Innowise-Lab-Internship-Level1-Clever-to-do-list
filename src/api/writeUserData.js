import { getDatabase, ref, set } from 'firebase/database';

export function writeUserData(userId, title, description, day) {
  const db = getDatabase();
  const date = new Date(day).toLocaleDateString();
  set(ref(db, userId + '/' + date), {
    title,
    description,
    date: day,
  });
}

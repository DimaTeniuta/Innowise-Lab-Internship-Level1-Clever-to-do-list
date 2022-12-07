import { getDatabase, ref, set } from 'firebase/database';
import { transformDate } from '../utils/transformDate';

export function writeUserData(userId, taskId, title, description, day) {
  const db = getDatabase();
  const date = transformDate(new Date(day));
  set(ref(db, `${userId}/${date}/${taskId}`), {
    taskId,
    title,
    description,
  });
}

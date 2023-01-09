import { ref, set } from 'firebase/database';
import { db } from './firebase';

export async function writeUserData(userId, currentDate, title, description, isComplete) {
  const date = new Date();
  const taskId = date.setDate(date.getDate());
  await set(ref(db, `${userId}/${currentDate}/${taskId}`), {
    taskId,
    title,
    description,
    complete: isComplete,
  });
}

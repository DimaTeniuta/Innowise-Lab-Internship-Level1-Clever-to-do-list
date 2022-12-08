import { getDatabase, ref, set } from 'firebase/database';

export async function writeUserData(userId, currentDate, title, description, isComplete) {
  const db = getDatabase();
  const date = new Date();
  const taskId = date.setDate(date.getDate());
  await set(ref(db, `${userId}/${currentDate}/${taskId}`), {
    taskId,
    title,
    description,
    complete: isComplete,
  });
}

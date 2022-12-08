import { getDatabase, ref, update } from 'firebase/database';

export function updateTaskData(userId, taskId, currentDate, title, description, complete) {
  const db = getDatabase();
  const taskData = {
    title,
    description,
    complete,
    taskId,
  };
  const updates = {};
  updates[`${userId}/${currentDate}/${taskId}`] = taskData;
  return update(ref(db), updates);
}

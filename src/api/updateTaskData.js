import { ref, update } from 'firebase/database';
import { db } from './firebase';

export function updateTaskData(userId, taskId, currentDate, title, description, complete) {
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

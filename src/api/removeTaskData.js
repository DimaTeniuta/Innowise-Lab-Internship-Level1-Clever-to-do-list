import { ref, update } from 'firebase/database';
import { db } from './firebase';

export function removeTaskData(userId, taskId, currentDate) {
  const updates = {};
  updates[`${userId}1/${currentDate}/${taskId}`] = null;
  return update(ref(db), updates);
}

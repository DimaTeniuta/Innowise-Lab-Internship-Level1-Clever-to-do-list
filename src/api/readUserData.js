import { getDatabase, ref, onValue } from 'firebase/database';

export const readUserData = (userId) => {
  const db = getDatabase();
  let data;
  const starCountRef = ref(db, userId);
  onValue(starCountRef, (snapshot) => {
    data = snapshot.val();
  });
  return data;
};

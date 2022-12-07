import { getDatabase, ref, onValue } from 'firebase/database';

export const readUserData = (userId) => {
  const db = getDatabase();
  let data;
  const dataRef = ref(db, userId);
  onValue(dataRef, (snapshot) => {
    data = snapshot.val();
  });
  return data;
};

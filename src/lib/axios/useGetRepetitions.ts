import axios from 'axios';

export async function getSingleWordFromRepetitions(
  userId: string,
  wordId: string
) {
  const { data } = await axios.get(
    `http://localhost:3000/api/repetitions/${userId}/${wordId}`
  );

  return data;
}
export async function getRepetitions(userId: string) {
  const { data } = await axios.get(
    `http://localhost:3000/api/repetitions/${userId}`
  );

  return data;
}
export async function deleteWordFromRepetitions(
  userId: string,
  wordId: string
) {
  await axios
    .delete(`http://localhost:3000/api/repetitions/${userId}/${wordId}`)
    .then(() => console.log('Delete successful'));
}
export function postWordToRepetitions(word: any, data: any) {
  fetch('/api/repetitions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...word, userId: data.user.id, power: '0' }),
  });
}

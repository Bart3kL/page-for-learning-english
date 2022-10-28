import axios from 'axios';

export default async function fetchLessons() {
  const { data } = await axios.get('http://localhost:3000/api/lessons');

  return data;
}

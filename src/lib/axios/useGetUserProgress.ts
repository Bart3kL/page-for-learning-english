import React from 'react';
import axios from 'axios';
import { getCsrfToken } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
async function getToken() {
  const csrfToken = getCsrfToken();
  return csrfToken;
}

const fetchUserProgress = async () => {
  const token = await getToken();

  const data = await axios
    .get(`http://localhost:3000/api/user-progress/${token}`)
    .then(({ data }: any) => data);
  return data;
};

const useGetUserProgress =  () => {

  const { data: userProgress, isLoading } = useQuery(
    ['userProgress'],
    fetchUserProgress
  );
  return  { userProgress, isLoading };
};

export default useGetUserProgress;

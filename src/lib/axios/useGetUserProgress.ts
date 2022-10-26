import React from 'react';
import axios from 'axios';
import { getCsrfToken } from 'next-auth/react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useToast } from '@chakra-ui/react';

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

const useGetUserProgress = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const { data: userProgress, isLoading } = useQuery(
    ['userProgress'],
    fetchUserProgress,
    {
      refetchInterval: 300,
      onSuccess: (data) => {
        if (!data) return [];
        if (!queryClient.getQueryData(['userProgress'])) {
          queryClient.setQueryData(['userProgress'], data);
        }
      },
      onError: (err: AxiosError) => {
        if (err.response?.status === 403) {
          toast({
            title: 'Too many requests for your IP, serving data from cache.',
            status: 'error',
            position: 'top-right',
          });
          return;
        }
        if (err.response?.status === 404) {
          toast({
            title: "Entered repo doesn't exist.",
            status: 'error',
            position: 'top-right',
          });
        }
        toast({
          title: 'Internal server error, contant us for help.',
          status: 'error',
          position: 'top-right',
        });
      },

      initialData: () => {
        const cachedData = queryClient.getQueryData(['userProgress']);
        if (!cachedData) return;

        queryClient.cancelQueries(['userProgress']);
        return cachedData;
      },
    }
  );

    return { userProgress, isLoading };

};

export default useGetUserProgress;

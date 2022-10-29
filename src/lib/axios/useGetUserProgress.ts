import React from 'react';
import axios from 'axios';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useToast } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

const fetchUserProgress = async (id: string) => {
  if (id) {
    const data = await axios
      .get(`http://localhost:3000/api/user-progress/${id}`)
      .then(({ data }: any) => data);
    return data;
  }
  return 'e'
};

const useGetUserProgress = () => {
  const { data }:any = useSession();
  const queryClient = useQueryClient();
  const toast = useToast();
  const userId = data?.user.id;
  const { data: userProgress, isLoading } = useQuery(
    ['userProgress'],
    () => fetchUserProgress(userId),
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
  if (userId) {
    return { userProgress, isLoading };
  }
};

export default useGetUserProgress;

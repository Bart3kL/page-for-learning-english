import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useToast } from '@chakra-ui/react';
import { AxiosError } from 'axios';
import BarLoader from 'react-spinners/BarLoader';

import { override } from '../../../lib/spinner';
import ScienceLayout from '../../../components/layouts/ScienceLayout';
import { RepetitionsWrapper } from '../../../components/PageSpecific/Science/Repetitions.styled';
import { getRepetitions } from '../../../lib/axios/useGetRepetitions';
import SingleWordToRepeat from '../../../components/science/repetitions/SingleWordToRepeat';

const Repetitions = () => {
  const { data }: any = useSession();
  const queryClient = useQueryClient();
  const toast = useToast();
  const { data: repetitions, isLoading } = useQuery(
    [`user-repetitions`],
    () => getRepetitions(data.user.id),
    {
      onSuccess: (data) => {
        if (!data) return [];
        if (!queryClient.getQueryData([`user-repetitions`])) {
          queryClient.setQueryData([`user-repetitions`], data);
        }
        data.forEach((el: any) => {
          if (!queryClient.getQueryData([`user-repetitions`])) {
            queryClient.setQueryData([`user-repetitions`], el);
          }
        });
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
        const cachedData = queryClient.getQueryData([`user-repetitions`]);
        if (!cachedData) return;

        queryClient.cancelQueries([`user-repetitions`]);

        return cachedData;
      },
    }
  );

  return (
    <ScienceLayout>
      {isLoading ? (
        <RepetitionsWrapper>
          <BarLoader
            color={'#1f2233'}
            loading={isLoading}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </RepetitionsWrapper>
      ) : (
        <RepetitionsWrapper>
          <h3>
            Powtórki: {repetitions !== undefined ? repetitions.length : ''}
          </h3>
          <SingleWordToRepeat repetitions={repetitions} />
        </RepetitionsWrapper>
      )}
    </ScienceLayout>
  );
};

export default Repetitions;

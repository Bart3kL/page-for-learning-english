import React from 'react';
import axios from 'axios';
import {
  dehydrate,
  QueryClient,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import BarLoader from 'react-spinners/BarLoader';

import { useToast } from '@chakra-ui/react';
import { AxiosError } from 'axios';
import ScienceLayout from '../../components/layouts/ScienceLayout';
import LessonGrammar from '../../components/science/lessons/grammar/LessonGrammar';
import { HeadLine } from '../../components/PageSpecific/Science/Vocabluary.styled';
import { override } from '../../lib/spinner';

const fetchLesson = (id: string) =>
  axios
    .get(`http://localhost:3000/api/lessons/${id}/grammar`)
    .then(({ data }: any) => data);

const Vocabluary = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const { data: grammar, isLoading } = useQuery(
    [`id_per_lesson-grammar`,id],
    () => fetchLesson(id),
    {
      onSuccess: (data) => {
        if (!data) return [];
        if (!queryClient.getQueryData([`id_per_lesson-grammar`,id])) {
          queryClient.setQueryData([`id_per_lesson-grammar`,id], data);
        }
        data.forEach((el: any) => {
          if (!queryClient.getQueryData([`id_per_lesson-grammar`,id])) {
            queryClient.setQueryData([`id_per_lesson-grammar`,id], el);
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
        const cachedData = queryClient.getQueryData([
          `id_per_lesson-grammar`,id,
        ]);
        if (!cachedData) return;

        queryClient.cancelQueries([`id_per_lesson-grammar`,id]);

        return cachedData;
      },
    }
  );
  return (
    <ScienceLayout>
      {isLoading ? (
        <BarLoader
          color={'#1f2233'}
          loading={isLoading}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <HeadLine>
            Lekcja 2 - <span>Gramatyka</span>
          </HeadLine>
          <LessonGrammar grammar={grammar} />
        </>
      )}
    </ScienceLayout>
  );
};

export default Vocabluary;

export const getServerSideProps = async (context: {
  params: { id_per_lesson: string };
}) => {
  const id = context.params?.id_per_lesson as string;
  const queryClient = new QueryClient();
  queryClient.cancelQueries([`id_per_lesson-grammar`,id]);

  await queryClient.prefetchQuery([`id_per_lesson-grammar`,id], () =>
    fetchLesson(id)
  );

  return {
    props: {
      id,
      dehydratedState: dehydrate(queryClient).toString(),
    },
  };
};

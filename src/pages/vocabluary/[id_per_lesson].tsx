import React from 'react';
import axios from 'axios';
import {
  dehydrate,
  QueryClient,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { useToast } from '@chakra-ui/react';
import { AxiosError } from 'axios';
import ScienceLayout from '../../components/layouts/ScienceLayout';
import LessonVocabluary from '../../components/science/lessons/vocabluary/LessonVocabluary';
import { HeadLine } from '../../styles/Vocabluary.css';

const fetchLesson = (id: string) =>
  axios
    .get(`http://localhost:3000/api/lessons/${id}/vocabluary`)
    .then(({ data }:any) => data);

const Vocabluary = ({ id }: any) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const { data: vocabluary, isLoading } = useQuery(
    [`id_per_lesson-${id}-vocabluary`],
    () => fetchLesson(id),
    {
      onSuccess: (data) => {
        if (!data) return [];
        if (!queryClient.getQueryData([`id_per_lesson-${id}-vocabluary`])) {
          queryClient.setQueryData([`id_per_lesson-${id}-vocabluary`], data);
        }
        data.forEach((el: any) => {
          if (!queryClient.getQueryData<any[]>([`id_per_lesson-${id}-vocabluary`])) {
            queryClient.setQueryData([`id_per_lesson-${id}-vocabluary`], el);
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
        const cachedData = queryClient.getQueryData([`id_per_lesson-${id}-vocabluary`]);
        if (!cachedData) return;

        queryClient.cancelQueries([`id_per_lesson-${id}-vocabluary`]);

        return cachedData;
      },
    }
  );
  return (
    <ScienceLayout>
      <HeadLine>
        Lekcja 1 - <span>słownictwo</span>
      </HeadLine>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <LessonVocabluary vocabluary={vocabluary} />
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
  queryClient.cancelQueries([`id_per_lesson-${id}-vocabluary`]);

  await queryClient.prefetchQuery([`id_per_lesson-${id}-vocabluary`, id], () => fetchLesson(id));

  return {
    props: {
      id,
      dehydratedState: dehydrate(queryClient).toString(),
    },
  };
};

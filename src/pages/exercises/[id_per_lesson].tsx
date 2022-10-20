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
import LessonExercises from '../../components/science/lessons/exercises/LessonExercises';
import { HeadLine } from '../../styles/Vocabluary.css';

const fetchLesson = (id: string) =>
  axios
    .get(`https://page-for-learning-english.vercel.app/api/lessons/${id}/exercises`)
    .then(({ data }) => data);

const Exercises = ({ id }: any) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const { data: exercises, isLoading } = useQuery(
    [`id_per_lesson-${id}-exercises`],
    () => fetchLesson(id),
    {
      onSuccess: (data) => {
        if (!data) return [];
        if (!queryClient.getQueryData([`id_per_lesson-${id}-exercises`])) {
          queryClient.setQueryData([`id_per_lesson-${id}-exercises`], data);
        }
        data.forEach((el: any) => {
          if (!queryClient.getQueryData<any[]>([`id_per_lesson-${id}-exercises`])) {
            queryClient.setQueryData([`id_per_lesson-${id}-exercises`], el);
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
        const cachedData = queryClient.getQueryData([`id_per_lesson-${id}-exercises`]);
        if (!cachedData) return;

        queryClient.cancelQueries([`id_per_lesson-${id}-exercises`]);

        return cachedData;
      },
    }
  );
  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(exercises)
  return (
    <ScienceLayout>
      <HeadLine>
        Lekcja 3 - <span>Ćwiczenia</span>
      </HeadLine>
      <LessonExercises exercises={exercises}/>
    </ScienceLayout>
  );
};

export default Exercises;

export const getServerSideProps = async (context: {
  params: { id_per_lesson: string };
}) => {
  const id = context.params?.id_per_lesson as string;
  const queryClient = new QueryClient();
  queryClient.cancelQueries([`id_per_lesson-${id}-exercises`]);

  await queryClient.prefetchQuery([`id_per_lesson-${id}-exercises`, id], () => fetchLesson(id));

  return {
    props: {
      id,
      dehydratedState: dehydrate(queryClient).toString(),
    },
  };
};

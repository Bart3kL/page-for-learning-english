import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { AxiosError } from 'axios';

import ScienceLayout from '../../../components/layouts/ScienceLayout';
import { HeadLine, LessonsWrapper } from '../../../styles/LessonPage.css';
import LessonView from '../../../components/science/lessons/LessonView';

async function fetchLessons() {
  const { data } = await axios.get('https://page-for-learning-english.vercel.app/api/lessons');
  return data;
}
const LessonPage = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const lessons = useQuery(['lessons'], fetchLessons, {
    onSuccess: (data) => {
      if (!data) return [];
      if (!queryClient.getQueryData(['lessons'])) {
        queryClient.setQueryData(['lessons'], data);
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
      const cachedData = queryClient.getQueryData(['lessons']);
      if (!cachedData) return;
      
      queryClient.cancelQueries(['lessons']);
      return cachedData;
    },
  });
  const { data, isLoading } = lessons;
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <ScienceLayout>
      <HeadLine>Wybierz lekcje</HeadLine>
      <LessonsWrapper>
        {data.map((lesson: any) => (
          <LessonView lesson={lesson} key={lesson.id} />
        ))}
      </LessonsWrapper>
    </ScienceLayout>
  );
};

export default LessonPage;

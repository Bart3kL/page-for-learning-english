import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@chakra-ui/react';
import { AxiosError } from 'axios';
import BarLoader from 'react-spinners/BarLoader';

import ScienceLayout from '../../../components/layouts/ScienceLayout';
import {
  HeadLine,
  LessonsWrapper,
} from '../../../components/PageSpecific/Science/LessonPage.styled';
import LessonView from '../../../components/science/lessons/LessonView';
import fetchLessons from '../../../lib/axios/useAxios';
import { ILesson } from '../../../types';
import { override } from '../../../lib/spinner';

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

  return (
    <ScienceLayout>
      {isLoading ? (
        <BarLoader
          color={'#1f2233'}
          loading={isLoading}
          cssOverride={override}
          size={250}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <HeadLine>Wybierz lekcje</HeadLine>
          <LessonsWrapper>
            {data.map((lesson: ILesson) => (
              <LessonView lesson={lesson} key={lesson.id} />
            ))}
          </LessonsWrapper>
        </>
      )}
    </ScienceLayout>
  );
};

export default LessonPage;

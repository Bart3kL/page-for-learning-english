import React, { useEffect } from 'react';
import { useQuery, useQueryClient, useQueries } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useToast } from '@chakra-ui/react';
import { AxiosError } from 'axios';
import BarLoader from 'react-spinners/BarLoader';

import ScienceLayout from '../../components/layouts/ScienceLayout';
import NoAccess from '../../components/Errors/NoAccess';
import {
  WelcomeMessage,
  ContentWrapper,
  ProgressBarWrapper,
  ProgressBar,
} from '../../components/PageSpecific/Science/SciencePage.styled';
import fetchLessons from '../../lib/axios/useAxios';
import { ILesson } from '../../types';
import { override } from '../../lib/spinner';
import NextLessons from '../../components/science/main/NextLessons';
import useGetUserProgress from '../../lib/axios/useGetUserProgress';

const SciencePage = () => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const toast = useToast();
  const lessons = useQuery(['nextLessons'], fetchLessons, {
    onSuccess: (data) => {
      if (!data) return [];
      if (!queryClient.getQueryData(['nextLessons'])) {
        queryClient.setQueryData(['nextLessons'], data);
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
      const cachedData = queryClient.getQueryData(['nextLessons']);
      if (!cachedData) return;

      queryClient.cancelQueries(['nextLessons']);
      return cachedData;
    },
  });
  const { data, isLoading } = lessons;
 const fetchLessonStep = useGetUserProgress();

  if (!session) {
    return <NoAccess />;
  }
  return (
    <ScienceLayout>
      <ContentWrapper>
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
            <div>
              <WelcomeMessage>
                <h2>Witaj ponownie, {session.user?.name}</h2>
                <p>Wczoraj wykonałeś 42 powtórki.</p>
              </WelcomeMessage>    
              <NextLessons data={data}/>
            </div>
            <ProgressBarWrapper>
              <h3>Twój potęp</h3>
              <p>
                {Math.floor(
                  (fetchLessonStep?.userProgress.lesson / data.length) * 100
                )}
                /100%
              </p>
              <ProgressBar>
                {data.map((lesson: ILesson) => (
                  <div
                    key={lesson.id}
                    style={
                      fetchLessonStep?.userProgress.lesson >= lesson.id
                        ? { backgroundColor: 'red' }
                        : { backgroundColor: '#d9d9d9' }
                    }
                  >
                    Lesson {lesson.id}
                  </div>
                ))}
              </ProgressBar>
            </ProgressBarWrapper>
          </>
        )}
      </ContentWrapper>
    </ScienceLayout>
  );
};

export default SciencePage;

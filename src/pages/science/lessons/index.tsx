import React from 'react';
import {useQuery } from '@tanstack/react-query';
import axios from 'axios';

import ScienceLayout from '../../../components/layouts/ScienceLayout';
import { HeadLine, LessonsWrapper } from '../../../styles/LessonPage.css';
import LessonView from '../../../components/science/lessons/LessonView';

async function fetchLessons() {
  const { data } = await axios.get('http://localhost:3000/api/lessons');
  return data;
}
const LessonPage = () => {
  const { data, isLoading } = useQuery(['lessons'], fetchLessons);

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

import React from 'react';

import ScienceLayout from '../../../components/layout/ScienceLayout';
import { HeadLine, LessonsWrapper } from '../../../styles/LessonPage.css';
import SingleLesson from '../../../components/science/lessons/SingleLesson';

const LessonPage = () => {
  return (
    <ScienceLayout>
      <HeadLine>Wybierz lekcje</HeadLine>
      <LessonsWrapper>
        <SingleLesson />
        <SingleLesson />
        <SingleLesson />
        <SingleLesson />
        <SingleLesson />
        <SingleLesson />
        <SingleLesson />
        <SingleLesson />
        <SingleLesson />
      </LessonsWrapper>
    </ScienceLayout>
  );
};

export default LessonPage;

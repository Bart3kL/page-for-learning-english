import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import {
  SingleLessonWrapper,
  ImageWrapper,
  LessonDetails,
  LessonTitle,
  LessonCategories,
  SingleLessonWrapperDisabled,
} from './LessonView.css';
import { ILesson } from '../../../types';
import useGetUserProgress from '../../../lib/axios/useGetUserProgress';

const SingleLesson = ({ lesson }: { lesson: ILesson }) => {
  const { userProgress, isLoading } = useGetUserProgress();
  if (isLoading) {
    return <p>Loading..</p>;
  }
  return (
    <>
      {userProgress.lesson >= lesson.id ? (
        <Link href={`/science/lessons/${lesson.id}`}>
          <SingleLessonWrapper>
            <ImageWrapper>
              <Image
                src={lesson.image}
                alt="Picture of the author"
                width={100}
                height={100}
              />
            </ImageWrapper>
            <LessonDetails>
              <LessonTitle>{lesson.title}</LessonTitle>
              <LessonCategories>1/3</LessonCategories>
            </LessonDetails>
          </SingleLessonWrapper>
        </Link>
      ) : (
        <SingleLessonWrapperDisabled>
          <ImageWrapper>
            <Image
              src={lesson.image}
              alt="Picture of the author"
              width={100}
              height={100}
            />
          </ImageWrapper>
          <LessonDetails>
            <LessonTitle>{lesson.title}</LessonTitle>
            <LessonCategories>1/3</LessonCategories>
          </LessonDetails>
        </SingleLessonWrapperDisabled>
      )}
    </>
  );
};

export default SingleLesson;

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import BarLoader from 'react-spinners/BarLoader';

import {
  SingleLessonWrapper,
  ImageWrapper,
  LessonDetails,
  LessonTitle,
  LessonCategories,
  SingleLessonWrapperDisabled,
} from './LessonView.styled';
import { ILesson } from '../../../types';
import useGetUserProgress from '../../../lib/axios/useGetUserProgress';
import { override } from '../../../lib/spinner';

const SingleLesson = ({ lesson }: { lesson: ILesson }) => {
  const { userProgress, isLoading } = useGetUserProgress();
  
  if (isLoading) {
    return (
      <BarLoader
        color={'#1f2233'}
        loading={isLoading}
        cssOverride={override}
        size={250}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
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

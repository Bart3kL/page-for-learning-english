import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  SingleLessonWrapper,
  ImageWrapper,
  LessonDetails,
  LessonTitle,
  LessonCategories,
} from './LessonView.css';

const SingleLesson = ({ lesson }: any) => {
  return (
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
  );
};

export default SingleLesson;

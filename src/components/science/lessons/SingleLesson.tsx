import React from 'react';
import Image from 'next/image';
import { SingleLessonWrapper,ImageWrapper,LessonDetails } from './SingleLesson.css';
const SingleLesson = () => {
  return (
    <SingleLessonWrapper>
      <ImageWrapper>
        <Image
          src="https://media.istockphoto.com/photos/smiling-parents-with-two-children-picture-id1082467846?k=20&m=1082467846&s=612x612&w=0&h=pFLkv852pT3ftEZUstMnhYHgJXUqxg0PmHkMWoMSsUg="
          alt="Picture of the author"
          width={100}
          height={100}
        />
      </ImageWrapper>
      <LessonDetails>
        <p>Family</p>
      </LessonDetails>
    </SingleLessonWrapper>
  );
};

export default SingleLesson;

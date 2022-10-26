import React from 'react';
import useGetUserProgress from '../../../lib/axios/useGetUserProgress';
import { ILesson } from '../../../types';
import Image from 'next/image';
import {NextLesson,Lessons} from './NextLessons.styled';
const NextLessons = ({ data }: any) => {
  const fetchLessonStep = useGetUserProgress();
  const nextLessons = data?.slice(
    parseInt(fetchLessonStep?.userProgress.lesson, data.length)
  );
  return (
    <NextLesson>
      <h2>Następne lekcje</h2>
      <Lessons>
        {nextLessons?.slice(0, 3).map((lesson: ILesson) => (
          <>
            <div key={lesson.id}>
              <p>
                {lesson.id}) {lesson.title}
              </p>
              <span>
                <Image
                  src={lesson.image}
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
              </span>
            </div>
          </>
        ))}
      </Lessons>
    </NextLesson>
  );
};

export default NextLessons;

import React from 'react';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';

import { HeadLine } from '../../../../styles/LessonPage.css';
import ScienceLayout from '../../../../components/layouts/ScienceLayout';
import {
  LessonCategory,
  LessonsWrapper,
  CategoriesWrapper,
  ImageWrapper,
} from '../../../../styles/Lesson.css';

const fetchLesson = (id: string) =>
  axios.get(`http://localhost:3000/api/lessons/${id}`).then(({ data }) => data);

const Lesson = ({ id }: any) => {
  const { data: lesson, isLoading } = useQuery(
    ['id', id],
    () => fetchLesson(id),
    {
      enabled: id > 0,
      staleTime: Infinity,
    }
  );
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <ScienceLayout>
      <HeadLine>{lesson.title}</HeadLine>
      <LessonsWrapper>
        <CategoriesWrapper>
          <Link href={`/science/lessons/${lesson.id}/vocabluary`}>
            <LessonCategory>
              <p>Lekcja 1</p>
              <p>Słownictwo</p>
              <IoIosArrowDown />
            </LessonCategory>
          </Link>
          <Link href={`/grammar/${lesson.id}`}>
            <LessonCategory>
              <p>Lekcja 2</p>
              <p>Gramatyka</p>
              <IoIosArrowDown />
            </LessonCategory>
          </Link>
          <Link href={`/science/lessons/${lesson.id}/exercises`}>
            <LessonCategory>
              <p>Lekcja 3</p>
              <p>Ćwiczenia</p>
              <IoIosArrowDown />
            </LessonCategory>
          </Link>
        </CategoriesWrapper>
        <ImageWrapper>
          <Image
            src={lesson.image}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </ImageWrapper>
      </LessonsWrapper>
    </ScienceLayout>
  );
};

export default Lesson;

export const getServerSideProps = async (context: {
  params: { id: string };
}) => {
  const id = context.params?.id as string;
  const queryClient = new QueryClient();

  queryClient.cancelQueries(['id']);

  await queryClient.prefetchQuery(['id', id], () => fetchLesson(id));

  return {
    props: {
      id,
      dehydratedState: dehydrate(queryClient).toString(),
    },
  };
};

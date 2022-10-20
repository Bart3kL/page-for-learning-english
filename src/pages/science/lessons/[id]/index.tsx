import React from 'react';
import {
  dehydrate,
  QueryClient,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { AxiosError } from 'axios';

import { HeadLine } from '../../../../styles/LessonPage.css';
import ScienceLayout from '../../../../components/layouts/ScienceLayout';
import {
  LessonCategory,
  LessonsWrapper,
  CategoriesWrapper,
  ImageWrapper,
} from '../../../../styles/Lesson.css';

const fetchLesson = (id: string) =>
  axios
    .get(`http://localhost:3000/api/lessons/${id}`)
    .then(({ data }: any) => data);

const Lesson = ({ id }: any) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const { data: lesson, isLoading } = useQuery(
    [`lesson-${id}`],
    () => fetchLesson(id),
    {
      onSuccess: (data) => {
        if (!data) return [];
        if (!queryClient.getQueryData([`lesson-${id}`])) {
          queryClient.setQueryData([`lesson-${id}`], data);
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
        const cachedData = queryClient.getQueryData([`lesson-${id}`]);
        if (!cachedData) return;

        queryClient.cancelQueries([`lesson-${id}`]);

        return cachedData;
      },
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
          <Link href={`/vocabluary/${id}`}>
            <LessonCategory>
              <p>Lekcja 1</p>
              <p>Słownictwo</p>
              <IoIosArrowDown />
            </LessonCategory>
          </Link>
          <Link href={`/grammar/${id}`}>
            <LessonCategory>
              <p>Lekcja 2</p>
              <p>Gramatyka</p>
              <IoIosArrowDown />
            </LessonCategory>
          </Link>
          <Link href={`/exercises/${id}`}>
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

  queryClient.cancelQueries([`lesson-${id}`]);

  await queryClient.prefetchQuery([`lesson-${id}`, id], () => fetchLesson(id));

  return {
    props: {
      id,
      dehydratedState: dehydrate(queryClient).toString(),
    },
  };
};

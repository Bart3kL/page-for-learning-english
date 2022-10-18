import React from 'react';
import axios from 'axios';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';

import ScienceLayout from '../../components/layouts/ScienceLayout';
// import LessonVocabluary from '../../../../../components/science/lessons/vocabluary/LessonVocabluary';
// import { HeadLine } from '../../../../../styles/Vocabluary.css';

const fetchLesson = (id: string) =>
  axios
    .get(`http://localhost:3000/api/lessons/${id}/vocabluary`)
    .then(({ data }) => data);

const Grammar = ({ id }: any) => {
  const { data: vocabluary, isLoading } = useQuery(
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
    <ScienceLayout>s
      {/* <HeadLine>
        Lekcja 1 - <span>słownictwo</span>
      </HeadLine>
      <LessonVocabluary vocabluary={vocabluary} /> */}
    </ScienceLayout>
  );
};

export default Grammar;

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

import React from 'react';
import {
  dehydrate,
  QueryClient,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { AxiosError } from 'axios';

import Word from '../../../components/dictonary/words/Word';
import BarLoader from 'react-spinners/BarLoader';
import { override } from '../../../lib/spinner';
import Header from '../../../components/dictonary/Header';
import { WordsWrapper,WordList } from '../../../components/dictonary/words/Word.styled';


async function fetchWords(id: string) {
  const { data } = await axios.get(
    `http://localhost:3000/api/dictionary/words/${id}`
  );
  return data;
}

const Words = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const { data: words, isLoading } = useQuery(
    [`words`, id],
    () => fetchWords(id),
    {
      onSuccess: (data) => {
        if (!data) return [];
        if (!queryClient.getQueryData([`words`, id])) {
          queryClient.setQueryData([`words`, id], data);
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
        const cachedData = queryClient.getQueryData([`words`, id]);
        if (!cachedData) return;

        queryClient.cancelQueries([`words`, id]);
        return cachedData;
      },
    }
  );

  return (
    <div>
      <Header title="Słownik" description="Lista dostępnych słów" />
      {isLoading ? (
        <BarLoader
          color={'#1f2233'}
          loading={isLoading}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <WordsWrapper>
          <WordList>
            {words.map((word) => (
              <Word word={word} key={word.id} />
            ))}
          </WordList>
        </WordsWrapper>
      )}
    </div>
  );
};

export default Words;

export const getServerSideProps = async (context: {
  params: { id: string };
}) => {
  const id = context.params?.id as string;
  const queryClient = new QueryClient();

  queryClient.cancelQueries([`words`, id]);

  await queryClient.prefetchQuery([`words`, id], () => fetchWords(id));
  return {
    props: {
      id,
      dehydratedState: dehydrate(queryClient).toString(),
    },
  };
};

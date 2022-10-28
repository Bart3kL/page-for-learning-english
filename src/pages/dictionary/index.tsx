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
import BarLoader from 'react-spinners/BarLoader';
import Link from 'next/link';

import Header from '../../components/dictonary/Header';
import { ContentWrapper,List } from '../../components/PageSpecific/Dictionary/DictionaryPage.styled';
import { override } from '../../lib/spinner';

async function fetchDictonaryLevels() {
  const { data } = await axios.get('http://localhost:3000/api/dictionary');
  return data;
}

const Dictonary = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const { data: levels, isLoading } = useQuery(
    [`dictionaryLevels`],
    () => fetchDictonaryLevels(),
    {
      onSuccess: (data) => {
        if (!data) return [];
        if (!queryClient.getQueryData([`dictionaryLevels`])) {
          queryClient.setQueryData([`dictionaryLevels`], data);
        }
        data.forEach((el: any) => {
          if (!queryClient.getQueryData([`dictionaryLevels`])) {
            queryClient.setQueryData([`dictionaryLevels`], el);
          }
        });
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
        const cachedData = queryClient.getQueryData([`dictionaryLevels`]);
        if (!cachedData) return;

        queryClient.cancelQueries([`dictionaryLevels`]);

        return cachedData;
      },
    }
  );
  return (
    <div>
      <Header
        title="Wybierz poziom"
        description="Słownik podzielony jest na poziomy."
      />
      {isLoading ? (
        <ContentWrapper>
          <BarLoader
            color={'#1f2233'}
            loading={isLoading}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </ContentWrapper>
      ) : (
        <ContentWrapper>
          <List>
            {levels.map((level) => (
              <Link href={`/dictionary/category/${level.id}`} key={level.id}>
                <li
                  key={level.id}
                  style={{ backgroundImage: `url(${level.image})` }}
                >
                  <button>{level.level}</button>
                </li>
              </Link>
            ))}
          </List>
        </ContentWrapper>
      )}
    </div>
  );
};

export default Dictonary;

export const getServerSideProps = async (context: {
  params: { id_per_lesson: string };
}) => {
  const id = context.params?.id_per_lesson as string;
  const queryClient = new QueryClient();
  queryClient.cancelQueries([`dictionaryLevels`]);

  await queryClient.prefetchQuery([`dictionaryLevels`], () =>
    fetchDictonaryLevels()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient).toString(),
    },
  };
};

import React from 'react';
import {
  dehydrate,
  QueryClient,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import { useToast } from '@chakra-ui/react';
import { AxiosError } from 'axios';

import BarLoader from 'react-spinners/BarLoader';
import { override } from '../../../lib/spinner';
import Header from '../../../components/dictonary/Header';
import { ContentWrapper } from '../../../components/PageSpecific/Dictionary/DictionaryPage.styled';
import { List } from '../../../components/dictonary/categories/Categories.styled';
import Link from 'next/link';

async function fetchSubcategory(id: string) {
  const { data } = await axios.get(
    `http://localhost:3000/api/dictionary/subcategories/${id}`
  );
  return data;
}

const Subcategory = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const { data: subcategories, isLoading } = useQuery(
    [`subcategory`, id],
    () => fetchSubcategory(id),
    {
      onSuccess: (data) => {
        if (!data) return [];
        if (!queryClient.getQueryData([`subcategory`, id])) {
          queryClient.setQueryData([`subcategory`, id], data);
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
        const cachedData = queryClient.getQueryData([`subcategory`, id]);
        if (!cachedData) return;

        queryClient.cancelQueries([`subcategory`, id]);
        return cachedData;
      },
    }
  );

  return (
    <div>
      <Header
        title="Wybierz podkategorię"
        description="Słownik podzielony jest na podkategorie."
      />
      {isLoading ? (
        <BarLoader
          color={'#1f2233'}
          loading={isLoading}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <ContentWrapper>
          <List>
            {subcategories.map((subcategory) => (
              <Link
                href={`/dictionary/words/${subcategory.id}`}
                key={subcategory.id}
              >
                <li key={subcategory.id}>
                  <h3>{subcategory.title}</h3>
                  <Image
                    src="https://i.imgur.com/izOMG6H.png"
                    alt="Picture of category"
                    width={100}
                    height={100}
                  ></Image>
                </li>
              </Link>
            ))}
          </List>
        </ContentWrapper>
      )}
    </div>
  );
};

export default Subcategory;

export const getServerSideProps = async (context: {
  params: { id: string };
}) => {
  const id = context.params?.id as string;
  const queryClient = new QueryClient();

  queryClient.cancelQueries([`subcategory`, id]);

  await queryClient.prefetchQuery([`subcategory`, id], () =>
    fetchSubcategory(id)
  );
  return {
    props: {
      id,
      dehydratedState: dehydrate(queryClient).toString(),
    },
  };
};

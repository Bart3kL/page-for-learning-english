import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import {
  WordItem,
  Sentences,
  AddToRepetitions,
  ImageWrapper,
} from './Word.styled';
import { BsFillVolumeUpFill } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';
import { MdAdd } from 'react-icons/md';
import Image from 'next/image';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@chakra-ui/react';
import { AxiosError } from 'axios';
import { IWord } from '../../../types';
import {
  getSingleWordFromRepetitions,
  deleteWordFromRepetitions,
  postWordToRepetitions,
} from '../../../lib/axios/useGetRepetitions';
import { BarLoader } from 'react-spinners';
import { override } from '../../../lib/spinner';

const Word = ({ word }: { word: IWord }) => {
  const { data }: any = useSession();
  const [exist, setExists] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handleToggleSentences = () => {
    setToggle((prev) => !prev);
  };
  const handleSound = () => {
    const audio = new Audio(word.audio);
    audio.play();
  };

  const handleWordToRepetitions = () => {
    postWordToRepetitions(word, data);
    queryClient.refetchQueries({ stale: true });
    refetch();
  };
  const handleDeleteWordFromRepetitions = () => {
    deleteWordFromRepetitions(data.user.id, word.id);
    queryClient.refetchQueries({ stale: true });
    refetch();
  };

  const queryClient = useQueryClient();
  const toast = useToast();
  const wordInRepetitions = useQuery(
    ['wordInRepetitions', word.id],
    () => getSingleWordFromRepetitions(data.user.id, word.id),
    {
      onSuccess: (data) => {
        if (queryClient.getQueryData(['wordInRepetitions', word.id])) {
          queryClient.setQueryData(['wordInRepetitions', word.id], data);
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
        const cachedData = queryClient.getQueryData([
          'wordInRepetitions',
          word.id,
        ]);
        if (!cachedData) return;
        queryClient.cancelQueries(['wordInRepetitions', word.id]);
        return cachedData;
      },
    }
  );
  const { data: words, isLoading, refetch } = wordInRepetitions;

  useEffect(() => {
    if (words) {
      words.find((words:any) => words.id === word.id)
        ? setExists(true)
        : setExists(false);
    }
  }, [word.id, words]);

  return (
    <>
      {isLoading ? (
        <WordItem>
          <BarLoader
            color={'#1f2233'}
            loading={isLoading}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </WordItem>
      ) : (
        <WordItem>
          {!toggle ? (
            <>
              <ImageWrapper>
                <Image
                  src={word.image}
                  alt="Picture of the author"
                  width={300}
                  height={200}
                />
                {exist ? (
                  <AddToRepetitions onClick={handleDeleteWordFromRepetitions}>
                    <div>
                      <AiOutlineMinus />
                    </div>
                  </AddToRepetitions>
                ) : (
                  <AddToRepetitions onClick={handleWordToRepetitions}>
                    <div>
                      <MdAdd />
                    </div>
                  </AddToRepetitions>
                )}
              </ImageWrapper>
              <div>
                <p>{word.name}</p>
                <p>{word.translation}</p>
                <span>
                  <BsFillVolumeUpFill onClick={handleSound} />
                  <button onClick={handleToggleSentences}>Zdania</button>
                </span>
              </div>
            </>
          ) : (
            <Sentences>
              <span>{word.example1}</span>
              <span>{word.example2}</span>
              <button onClick={handleToggleSentences}>Słowo</button>
            </Sentences>
          )}
        </WordItem>
      )}
    </>
  );
};

export default Word;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSession } from 'next-auth/react';
import { useToast } from '@chakra-ui/react';
import {
  WordToTranslate,
  ButtonWrapper,
  Message,
} from './SingleWordToRepeat.styled';
const SingleWordToRepeat = ({ repetitions }: any) => {
  console.log(repetitions);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [success, setSuccess] = useState(false);
  const [knowledge, setKnowledge] = useState(0);

  const handleAddLetter = () => {
    const word = repetitions[index].name.split('');
    setValue((prev) => prev + word[wordIndex]);
    setWordIndex((prev) => prev + 1);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    setWordIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (value === repetitions[index]?.name) {
      setSuccess(true);
    }
  }, [value, index, repetitions]);

  const { data: dataa }: any = useSession();
  const handleResult = async (power: number) => {
    const userId = dataa?.user.id;
    setSuccess(false);
    setKnowledge(power);
    console.log(repetitions[index].id);
    fetch(
      `http://localhost:3000/api/repetitions/${userId}/${repetitions[index].id}`,
      {
        method: 'PATCH',
        body: JSON.stringify({ ...repetitions[index], power: knowledge }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    )

    setWordIndex(0);
    setValue('');
    setIndex((prev) => prev + 1);
  };
  const handleCheckResult = (power: number) => {
    setSuccess(true);
    setKnowledge(power);
  };

  return (
    <>
      <WordToTranslate>{repetitions[index]?.translation}</WordToTranslate>

      {success && <Message>{repetitions[index].name}</Message>}
      <textarea
        placeholder="tłumaczenie..."
        value={value}
        onChange={(e) => handleChange(e)}
        disabled={success ? true : false}
      />
      {!success ? (
        <ButtonWrapper>
          <div>
            <button onClick={handleAddLetter}>Podpowiedz literę</button>
            <p>Klawisz 1</p>
          </div>
          <div>
            <button
              disabled={value.length > 1 ? false : true}
              onClick={() => handleCheckResult(0)}
            >
              Sprawdź odpowiedź
            </button>
            <p>enter</p>
          </div>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          <div>
            <button onClick={() => handleResult(0)}>Źle</button>
            <p>Klawisz 1</p>
          </div>
          <div>
            <button onClick={() => handleResult(1)}>Średnio</button>
            <p>Klawisz 2</p>
          </div>
          <div>
            <button onClick={() => handleResult(2)}>Dobrze</button>
            <p>Klawisz 3</p>
          </div>
        </ButtonWrapper>
      )}
    </>
  );
};

export default SingleWordToRepeat;

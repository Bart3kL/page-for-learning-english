import React, { useState } from 'react';
import {
  WordToTranslate,
  ButtonWrapper,
} from '../../../components/PageSpecific/Science/Repetitions.styled';
const SingleWordToRepeat = ({ repetitions }) => {
  console.log(repetitions);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState('');
  return (
    <>
      <WordToTranslate>{repetitions[index].translation}</WordToTranslate>
      <textarea
        placeholder="tłumaczenie..."
        onChange={(e) => setValue(e.target.value)}
      />
      <ButtonWrapper>
        <div>
          <button>Podpowiedz literę</button>
          <p>Klawisz 1</p>
        </div>
        <div>
          <button disabled='true'>Sprawdź odpowiedź</button>
          <p>enter</p>
        </div>
      </ButtonWrapper>
    </>
  );
};

export default SingleWordToRepeat;

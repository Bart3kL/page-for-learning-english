import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { GiSpeaker } from 'react-icons/gi';

import {
  VocabluaryWrapper,
  CardWrapper,
  Card,
  ButtonWrapper,
  SoundWrapper,
} from './LessonVocabluary.css';

const LessonVocabluary = ({ vocabluary }:any) => {
  const [wordIndex, setWordIndex] = useState(0);

  const handleSound = () => {
    const audio = new Audio(vocabluary[wordIndex].audio);
    audio.play();
  };

  return (
    <VocabluaryWrapper>
      <CardWrapper>
        <Card>
          <p>{vocabluary[wordIndex].name}</p>
          <p>{vocabluary[wordIndex].translation}</p>
        </Card>
        <SoundWrapper>
          <GiSpeaker onClick={handleSound} />
        </SoundWrapper>
        <ButtonWrapper>
          <button onClick={() => setWordIndex(wordIndex + 1)}>Do nauki</button>
          <button onClick={() => setWordIndex(wordIndex + 1)}>Znam to</button>
        </ButtonWrapper>
        <p>{`${wordIndex}/${vocabluary.length}`}</p>
      </CardWrapper>
    </VocabluaryWrapper>
  );
};

export default LessonVocabluary;

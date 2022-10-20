import React, { useState } from 'react';
import { GiSpeaker } from 'react-icons/gi';

import {
  VocabluaryWrapper,
  CardWrapper,
  Card,
  ButtonWrapper,
  SoundWrapper,
} from './LessonVocabluary.css';

const LessonVocabluary = ({ vocabluary }: any) => {
  const [wordIndex, setWordIndex] = useState(0);

  const handleSound = () => {
    const audio = new Audio(vocabluary[wordIndex].audio);
    audio.play();
  };

  // const fetchWord = (word: any) => {
  //   fetch('/api/user-progress', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(word),
  //   });
  // };

  const handleToStudy = () => {
    setWordIndex(wordIndex + 1);
    // fetchWord({
    //   word: vocabluary[wordIndex].name,
    //   translation: vocabluary[wordIndex].translation,
    // });
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
          <button onClick={handleToStudy}>Do nauki</button>
          <button onClick={() => setWordIndex(wordIndex + 1)}>Znam to</button>
        </ButtonWrapper>
        <p>{`${wordIndex}/${vocabluary.length}`}</p>
      </CardWrapper>
    </VocabluaryWrapper>
  );
};

export default LessonVocabluary;

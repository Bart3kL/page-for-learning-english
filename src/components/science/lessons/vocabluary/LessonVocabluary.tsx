import React, { useState } from 'react';
import { GiSpeaker } from 'react-icons/gi';
import Link from 'next/link';

import {
  VocabluaryWrapper,
  CardWrapper,
  Card,
  ButtonWrapper,
  SoundWrapper,
} from './LessonVocabluary.css';
import { IVocabluary } from '../../../../types';
import { ButtonToNextLesson } from '../exercises/LessonExercises.css';
import useUserProgress from '../../../../lib/axios/usePostUserProgress';

const LessonVocabluary = ({ vocabluary }: { vocabluary: IVocabluary[] }) => {
  const fetchLessonStep = useUserProgress();

  const [wordIndex, setWordIndex] = useState(0);

  const handleSound = () => {
    const audio = new Audio(vocabluary[wordIndex].audio);
    audio.play();
  };
  const handleToStudy = () => {
    setWordIndex(wordIndex + 1);
  };

  return (
    <VocabluaryWrapper>
      {wordIndex === vocabluary.length ? (
        <ButtonToNextLesson
          onClick={() =>
            fetchLessonStep(vocabluary[0].vocabularyForLessonId, '2')
          }
        >
          <Link
            href={`/grammar/${parseInt(vocabluary[0].vocabularyForLessonId)}`}
          >
            Przejdz do gramatyki
          </Link>
        </ButtonToNextLesson>
      ) : (
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
      )}
    </VocabluaryWrapper>
  );
};

export default LessonVocabluary;
// struktura progresu lesson
// current step

// step
//

// list of steps

// lesson
// list of steps
// currentStep

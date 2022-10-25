import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { GrammarWrapper, HeadTitle, ImageWrapper } from './LessonGrammar.css';
import { IGrammar } from '../../../../types';
import { ButtonToNextLesson } from '../exercises/LessonExercises.css';
import useUserProgress from '../../../../lib/axios/usePostUserProgress';
const LessonGrammar = ({ grammar }: { grammar: IGrammar[] }) => {
  const fetchLessonStep = useUserProgress();
  return (
    <GrammarWrapper>
      <HeadTitle>{grammar[0].title}</HeadTitle>
      <ImageWrapper>
        <Image
          src={grammar[0].image}
          alt="Picture of the author"
          width={1200}
          height={600}
        />
      </ImageWrapper>
      <ButtonToNextLesson
        onClick={() => fetchLessonStep(grammar[0].grammarForLessonId, '3')}
      >
        <Link href={`/exercises/${parseInt(grammar[0].grammarForLessonId)}`}>
          Przejdz do ćwiczeń
        </Link>
      </ButtonToNextLesson>
    </GrammarWrapper>
  );
};

export default LessonGrammar;

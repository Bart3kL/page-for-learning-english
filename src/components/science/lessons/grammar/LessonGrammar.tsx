import Image from 'next/image';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { GiSpeaker } from 'react-icons/gi';

import { GrammarWrapper, HeadTitle, ImageWrapper } from './LessonGrammar.css';

const LessonGrammar = ({ grammar }:any) => {
  return (
    <GrammarWrapper>
      <HeadTitle>{grammar[0].title}</HeadTitle>
      <ImageWrapper >
        <Image
          src={grammar[0].image}
          alt="Picture of the author"
          width={1200}
          height={600}
        />
      </ImageWrapper>
    </GrammarWrapper>
  );
};

export default LessonGrammar;

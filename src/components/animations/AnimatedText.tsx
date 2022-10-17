import React from 'react';
import { TextList, TextItem, TextWrapper } from './AnimatedText.css';

const AnimatedText = () => {
  return (
    <TextWrapper>
      <TextList>
        <TextItem>
          <div data-text="Wybierz">Wybierz</div>
        </TextItem>
        <TextItem>
          <div data-text="Sposób">Sposób</div>
        </TextItem>
        <TextItem>
          <div data-text="Logowania">Logowania</div>
        </TextItem>
      </TextList>
    </TextWrapper>
  );
};

export default AnimatedText;

import React, { useState } from 'react';
import { WordItem, Sentences } from './Word.styled';
import { BsFillVolumeUpFill } from 'react-icons/bs';
const Word = ({ word }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggleSentences = () => {
    setToggle((prev) => !prev);
  };
  const handleSound = () => {
    const audio = new Audio(word.audio);
    audio.play();
  };
  return (
    <WordItem>
      {!toggle ? (
        <>
          <div style={{ backgroundImage: `url(${word.image})` }}></div>
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
  );
};

export default Word;

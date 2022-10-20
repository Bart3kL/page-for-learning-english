import React, { useState } from 'react';
import Link from 'next/link';
import {
  ExercisesWrapper,
  Exercise,
  OptionWrapper,
  Options,
  ButtonWrapper,
  Message,
  ButtonToNextLesson,
} from './LessonExercises.css';

const LessonExercises = ({ exercises }) => {
  const [manageExercise, setManageExercise] = useState({
    index: 0,
    answer: '',
    toggle: false,
  });

  const handleAnswer = (answer: string) => {
    setManageExercise({ index: manageExercise.index, answer, toggle: false });
  };

  const handleNextQuestion = () => {
    setManageExercise({
      index: manageExercise.index + 1,
      answer: '',
      toggle: false,
    });
  };
  const handleCheckAnswer = () => {
    setManageExercise({
      index: manageExercise.index,
      answer: manageExercise.answer,
      toggle: true,
    });
  };
  return (
    <ExercisesWrapper>
      {manageExercise.index === exercises.length ? (
        <ButtonToNextLesson>
          <Link
            href={`/science/lessons/${
              parseInt(exercises[0].exerciseForLessonId) + 1
            }`}
          >
            Przejdz do następnej lekcji
          </Link>
        </ButtonToNextLesson>
      ) : (
        <Exercise>
          <h2>{exercises[manageExercise.index].question}</h2>
          <Options>
            <OptionWrapper>
              <input
                type="checkbox"
                checked={
                  manageExercise.answer !==
                  exercises[manageExercise.index].option1
                    ? false
                    : true
                }
                onChange={() =>
                  handleAnswer(exercises[manageExercise.index].option1)
                }
              />
              <p>{exercises[manageExercise.index].option1}</p>
            </OptionWrapper>
            <OptionWrapper>
              <input
                type="checkbox"
                checked={
                  manageExercise.answer !==
                  exercises[manageExercise.index].option2
                    ? false
                    : true
                }
                onChange={() =>
                  handleAnswer(exercises[manageExercise.index].option2)
                }
              />
              <p>{exercises[manageExercise.index].option2}</p>
            </OptionWrapper>
            <OptionWrapper>
              <input
                type="checkbox"
                checked={
                  manageExercise.answer !==
                  exercises[manageExercise.index].option3
                    ? false
                    : true
                }
                onChange={() =>
                  handleAnswer(exercises[manageExercise.index].option3)
                }
              />
              <p>{exercises[manageExercise.index].option3}</p>
            </OptionWrapper>
          </Options>
          <Message>
            {manageExercise.toggle
              ? manageExercise.answer ===
                exercises[manageExercise.index].correctAnswer
                ? 'Znakomicie!'
                : 'Źle!'
              : ''}
          </Message>
          <ButtonWrapper>
            <button onClick={handleCheckAnswer}>Sprawdź</button>
            {manageExercise.toggle &&
              manageExercise.answer ===
                exercises[manageExercise.index].correctAnswer && (
                <button onClick={handleNextQuestion}>Następne</button>
              )}
          </ButtonWrapper>
          <p>{`${manageExercise.index + 1}/${exercises.length + 1}`}</p>
        </Exercise>
      )}
    </ExercisesWrapper>
  );
};

export default LessonExercises;

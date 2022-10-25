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
import { IExercise } from '../../../../types';
import useExercises from '../../../../hooks/useExercises';

const LessonExercises = ({ exercises }: { exercises: IExercise[] }) => {
  const {
    manageExercise,
    handleAnswer,
    handleNextQuestion,
    handleCheckAnswer,
  } = useExercises();

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

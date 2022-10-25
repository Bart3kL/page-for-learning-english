import React, { useState } from 'react';

const useExercises = () => {
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
  return {
    manageExercise,
    handleAnswer,
    handleNextQuestion,
    handleCheckAnswer,
  };
};

export default useExercises;

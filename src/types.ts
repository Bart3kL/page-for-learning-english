export interface ILesson {
  id: string;
  image: string;
  level: string;
  title: string;
}
export interface IVocabluary {
  id: string;
  audio: string;
  image: string;
  name: string;
  translation: string;
  vocabularyForLessonId: string;
}
export interface IGrammar {
  id: string;
  image: string;
  title: string;
  grammarForLessonId: string;
}
export interface IExercise {
  id: string;
  exerciseForLessonId: string;
  correctAnswer:string;
  option1:string;
  option2:string;
  option3:string;
  question:string
}

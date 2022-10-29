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
  correctAnswer: string;
  option1: string;
  option2: string;
  option3: string;
  question: string;
}
export interface IWord {
  id: string;
  audio: string;
  example1: string;
  example2: string;
  image: string;
  name: string;
  translation: string;
  vocabluaryForSubcategoryId: string;
}
export interface ILevel {
  id: string;
  image: string;
  level: string;
}
export interface ISubcategory {
  categoryId: string;
  id: string;
  image: string;
  title: string;
}
export interface ICategory {
  levelId: string;
  id: string;
  image: string;
  name: string;
}

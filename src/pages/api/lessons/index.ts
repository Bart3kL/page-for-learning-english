import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async function getAllLessons(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  if (req.method === 'GET') {
    const newLessons = await prisma.lessons.findMany();
    // const vocabulary = await prisma.vocabulary.findMany();
    // const grammarr = await prisma.grammar.findMany();
    // const exercise = await prisma.exercise.findMany();

    // const data = newLessons.map((lesson) => {
    //   const words = vocabulary.filter(
    //     (w) => w.vocabularyForLessonId === lesson.id
    //   );
    //   const grammar = grammarr.filter(
    //     (g) => g.grammarForLessonId === lesson.id
    //   );
    //   const exercises = exercise.filter(
    //     (e) => e.exerciseForLessonId === lesson.id
    //   );
    //   return { ...lesson, vocabulary: words, grammar, exercises };
    // });
    // console.log(data);
    return res.send(newLessons);
  } else if (req.method === 'POST') {
    const { body: data } = req;
    const newLesson = await prisma.lessons.create({
      data,
    });
    return res.status(201).send(newLesson);
  }
}

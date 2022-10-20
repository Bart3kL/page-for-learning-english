import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();
export default async function getLessonById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id }:any = req.query;
  const lesson = await prisma.lessons.findUnique({ where: { id } });
  // const vocabulary = await prisma.vocabulary.findMany();
  // const grammarr = await prisma.grammar.findMany();
  // const exercise = await prisma.exercise.findMany();
  // const words = vocabulary.filter((w) => w.vocabularyForLessonId === lesson?.id);
  // const grammar = grammarr.filter((g) => g.grammarForLessonId === lesson?.id);
  // const exercises = exercise.filter((e) => e.exerciseForLessonId === lesson?.id);



  return lesson ? res.send(lesson) : res.status(400).end();
}

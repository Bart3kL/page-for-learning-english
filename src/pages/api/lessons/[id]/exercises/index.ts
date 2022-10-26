import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
const prisma = new PrismaClient();

export default async function getLessonById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      // join

      // SELECT exercise.exerciseForLessonId, lessons.id FROM exercise, lessons WHERE exerciseForLessonId === id

      // https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries
      // const lesson = await prisma.lessons.findUnique({ where: { id }, {inclide: {
      //   exercise: true
      // }} });
      // const exercises = await prisma.exercise.findMany({
      //   where: { exerciseForLessonId: lesson.id },
      // });

      const { id }: any = req.query;
      const lesson = await prisma.lessons.findUnique({ where: { id } });

      const exercises = await prisma.exercise.findMany();
      const words = exercises.filter(
        (w) => w.exerciseForLessonId === lesson?.id
      );

      return lesson ? res.send(words) : res.status(400).end();
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }
}

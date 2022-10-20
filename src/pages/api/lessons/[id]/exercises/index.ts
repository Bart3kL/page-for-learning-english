import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();
export default async function getLessonById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
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

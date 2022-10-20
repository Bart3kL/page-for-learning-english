import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();
export default async function getLessonById(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { id } = req.query;
  const lesson = await prisma.lessons.findUnique({ where: { id } });

  const grammar = await prisma.grammar.findMany();
  const words = grammar.filter(
    (w) => w.grammarForLessonId === lesson?.id
  );


  return lesson ? res.send(words) : res.status(400).end();
}


import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();
export default async function getLessonById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // https://google/auth/token?=req.cookies.token
  // https://next-auth.js.org/getting-started/example#backend---api-route
  // GET POST PATCH PUT

  const { id } = req.query;
  const lesson = await prisma.lessons.findUnique({ where: { id } });

  const vocabulary = await prisma.vocabulary.findMany();
  const words = vocabulary.filter(
    (w) => w.vocabularyForLessonId === lesson?.id
  );

  // form
  //  name
  // data.res.error
  // validationError: ["name": 50234]

  return lesson ? res.send(words) : res.status(400).end();
}

// struktura progresu lesson
// current step

// step
//

// list of steps

// lesson
// list of steps
// currentStep

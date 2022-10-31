import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async function getAllLessons(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  if (req.method === 'GET') {
    const { wordId }: any = req.query;

    const repetitions = await prisma.repetitions.findMany();

    const repetition = repetitions.filter(
      (repetition) => repetition.id === wordId
    );
    return repetition ? res.send(repetition) : res.status(400).end();
  }
  if (req.method === 'DELETE') {
    const { wordId }: any = req.query;

    const repetitions = await prisma.repetitions.delete({
      where: { id: wordId },
    });

    return repetitions ? res.send(repetitions) : res.status(400).end();
  }

  return res.status(404).end();
}

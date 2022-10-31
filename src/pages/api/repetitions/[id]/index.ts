import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async function getAllLessons(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  if (req.method === 'GET') {
    const { id }: any = req.query;

    const repetitions = await prisma.repetitions.findMany();

    const repetition = repetitions.filter(
      (repetition) => repetition.userId === id
    );
    return repetition ? res.send(repetition) : res.status(400).end();
  }

  return res.status(404).end();
}

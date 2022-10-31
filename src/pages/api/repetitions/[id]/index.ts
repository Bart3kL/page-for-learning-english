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
    const sliced = repetition.slice(0);
    const sorted = sliced.sort(function (a:any, b:any) {
      return a.power - b.power;
    });

    const slicePerCent = sorted.slice(0, Math.ceil((sorted.length * 50) / 100));
    return slicePerCent ? res.send(slicePerCent) : res.status(400).end();
  }

  return res.status(404).end();
}

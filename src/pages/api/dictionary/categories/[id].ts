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
      const dictonaryLevel = await prisma.dictonaryLevel.findUnique({
        where: { id },
      });
      const categories = await prisma.categoriesForDictionaryLevel.findMany();
      const result = categories.filter(
        (category) => category.levelId === dictonaryLevel?.id
      );

      return result ? res.send(result) : res.status(400).end();
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }
}

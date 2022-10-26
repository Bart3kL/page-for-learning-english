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

      const subcategories = await prisma.subcategory.findUnique({
        where: { id },
      });
      const words = await prisma.words.findMany();
      const result = words.filter((word) => word.vocabularyForSubcategoryId === subcategories?.id);

      return result ? res.send(result) : res.status(400).end();
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }
}

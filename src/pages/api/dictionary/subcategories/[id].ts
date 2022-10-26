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

      const categories = await prisma.categoriesForDictionaryLevel.findUnique({
        where: { id },
      });
      const subcategories = await prisma.subcategory.findMany();

      const result = subcategories.filter(
        (category) => category.categoryId === categories?.id
      );

      return result ? res.send(result) : res.status(400).end();
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }
}

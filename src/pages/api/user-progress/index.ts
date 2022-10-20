import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async function getAllLessons(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  if (req.method === 'GET') {
    try {
      const newLessons = await prisma.lessons.findMany();
      return res.send(newLessons);
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }
  if (req.method === 'POST') {
    try {
      const { body: data } = req;
      // const newLesson = await prisma.lessons.create({
      //   data,
      // });
      console.log(data)
      // return res.status(201).send(newLesson);
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }
  return;
}

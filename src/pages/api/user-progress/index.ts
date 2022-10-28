import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async function getAllLessons(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  if (req.method === 'GET') {
    const usersProgress = await prisma.users.findMany();
    return res.send(usersProgress);
  }
  if (req.method === 'POST') {
    try {
      const { body: data } = req;
      const id = data.userId;
      console.log(data);
      const usersProgress = await prisma.users.upsert({
        where: { id: id },
        update: {
          id: data.userId,
          lesson: data.lesson,
          lessonStep: data.lessonStep,
          userId: data.userId,
        },
        create: {
          id: data.userId,
          lesson: data.lesson,
          lessonStep: data.lessonStep,
          userId: data.userId,
        },
      });
      return res.status(201).send(usersProgress);
    } catch (e) {
      console.error(e);
      return res.status(500).send({ success: false });
    }
  }
  return;
}

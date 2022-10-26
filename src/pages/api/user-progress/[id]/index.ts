import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { getCsrfToken } from 'next-auth/react';

export default async function getAllLessons(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  if (req.method === 'GET') {
    const { id }: any = req.query;
    const users = await prisma.users.findUnique({ where: { id } });
    return users ? res.send(users) : res.status(400).end();
  }

  return res.status(404).end();
}

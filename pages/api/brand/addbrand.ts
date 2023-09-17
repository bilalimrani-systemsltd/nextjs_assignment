import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await prisma.brand.deleteMany();
  await prisma.brand.createMany({
    data: [
      {
        name: 'dummy 1',
      },
      {
        name: 'dummy 2',
      },
    ],
  });

  res.status(200).json({ name: 'hello' });
}

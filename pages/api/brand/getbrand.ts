import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  const data = await prisma.brand.findMany();

  res.status(200).json(data);
}

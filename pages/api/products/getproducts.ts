import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  const product = await prisma.product.findMany();
  res.status(200).json(product);
}

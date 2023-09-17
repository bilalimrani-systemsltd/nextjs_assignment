import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import type { Product } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  const body = req.body;
  const product = await prisma.product.create({
    data: {
      title: body.title,
      price: body.price,
      brandId: body.brandId,
    },
  });

  res.status(200).json(product);
}

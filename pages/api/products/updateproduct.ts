import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import type { Product } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(request: Request, res: any) {
  const body: any = request.body;
  const product = await prisma.product.update({
    where: {
      id: Number(body.id),
    },
    data: {
      title: body.title,
      price: body.price,
      brandId: body.brandId,
    },
  });
  res.status(200).json(product);
}

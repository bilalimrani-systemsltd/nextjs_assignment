import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import AddProduct from "./components/AddProduct";
import DeleteProduct from "./components/DeleteProduct";
import UpdateProduct from "./components/UpdateProduct";
const prisma = new PrismaClient();

const getProducts = async () => {
  let data = await fetch('http://localhost:3000/api/products/getproducts')
  data = await data.json()
  return data;
};

const getBrands = async () => {
  let data = await fetch('http://localhost:3000/api/brand/getbrand')
  data = await data.json()
  return data;
};

const Product = async () => {
  const [products, brands]: any = await Promise.all([getProducts(), getBrands()]);

  return (
    <div>
      <div className="mb-2">
        <AddProduct brands={brands} />
      </div>

      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Brand ID</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product: any, index: number) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.brandId}</td>
              <td className="flex justify-center space-x-1">
                <UpdateProduct brands={brands} product={product} />
                <DeleteProduct product={product} />
                <Link href={`products/${String(product?.id)}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;

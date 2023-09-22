import { notFound } from "next/navigation";
import Title from "./components/Title";

const fetchProductBySlug = async (slug: string): Promise<any> => {
    let data = await fetch(`http://localhost:3000/api/products/${slug}`);
    data = await data.json()

    if (!data) {
        // throw new Error();
        notFound();
    }
    return data;
};

export default async function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = await fetchProductBySlug(params.slug);

  if(!restaurant) return null;
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <Title name={restaurant.title} /> <h3>{restaurant?.price}</h3>
      </div>
    </>
  );
}
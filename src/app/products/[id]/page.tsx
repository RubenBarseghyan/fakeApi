import { Metadata } from "next";
import { IProduct } from "@/types";
import ProductDetails from "@/components/ProductDetails/ProductDetails";

export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_BASE_API_URL}/products`);
    const products: IProduct[] = await res.json();
  
    return products.map(product => ({ id: product.id.toString() }));
  }

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {

  try {
    const res = await fetch(
      `${process.env.NEXT_BASE_API_URL}/products/${params.id}`
    );
    if (!res.ok) throw new Error("Product fetch failed");

    const product: IProduct = await res.json();

    return {
      title: product.title,
      description: product.description,
      openGraph: {
        title: product.title,
        description: product.description,
        images: [
          `${process.env.NEXT_PUBLIC_SITE_URL}/api/og/products/${params.id}`,
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: product.title,
        images: [
          `${process.env.NEXT_PUBLIC_SITE_URL}/api/og/products/${params.id}`,
        ],
      },
    };
  } catch (err) {
    return {
      title: "Product not found",
      description: "Unable to load product metadata.",
    };
  }
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(
    `${process.env.NEXT_BASE_API_URL}/products/${params.id}`
  );
  const product: IProduct = await res.json();

  return <ProductDetails product={product} />;
}

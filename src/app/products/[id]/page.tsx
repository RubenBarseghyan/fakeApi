import { Metadata } from "next";
import { IProduct } from "@/types";
import ProductDetails from "@/components/ProductDetails/ProductDetails";

export async function generateStaticParams() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products`);
    const products: IProduct[] = await res.json();
    const params = products.map((product) => ({ id: product.id.toString() }));
    return params;
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = await params;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/products/${id}`
    );
    if (!res.ok) throw new Error("Product fetch failed");

    const product: IProduct = await res.json();

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    return {
      title: product.title,
      description: product.description,
      openGraph: {
        title: product.title,
        description: product.description,
        images: [`${baseUrl}/api/og/products/${id}`],
      },
      twitter: {
        card: "summary_large_image",
        title: product.title,
        images: [`${baseUrl}/api/og/products/${id}`],
      },
    };
  } catch (err) {
    console.error("Error generating metadata:", err);
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
  const { id } = await params;

  try {
    const res = await fetch(`${process.env.NEXT_BASE_API_URL}/products/${id}`);
    if (!res.ok) throw new Error("Product fetch failed");

    const product: IProduct = await res.json();

    return <ProductDetails product={product} />;
  } catch (err) {
    console.error("Error fetching product details:", err);
    return <p>Product not found</p>;
  }
}

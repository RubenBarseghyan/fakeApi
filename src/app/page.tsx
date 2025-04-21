import ProductCard from "@/components/ProductCard/ProductCard";
import { Metadata } from "next";
import { IProduct } from "@/types";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "FakeApi",
  description: "Prosucts List",
  openGraph: {
    title: "FakeApi",
    description: "Best Products",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    siteName: "FakeApi",
  },
};

export default async function HomePage() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/products`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const products: IProduct[] = await res.json();

    return (
      <main className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    );
  } catch (error) {
    console.error("Error loading products:", error);
    return <p>Something went wrong while loading products.</p>;
  }
}

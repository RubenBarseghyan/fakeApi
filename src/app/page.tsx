'use client';
import { useQuery } from '@tanstack/react-query';
import ProductCard from "@/components/ProductCard/ProductCard";
import { IProduct } from '@/types';
import styles from './page.module.css';

async function fetchProducts() {
  const res = await fetch('/api/products');
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export default function HomePage() {
  const { data: products, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;

  return (
    <main className={styles.productGrid}>
      {products?.map((product: IProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}

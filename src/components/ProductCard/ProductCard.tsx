import Link from "next/link";
import Image from "next/image";
import styles from "./ProductCard.module.css"; // Assuming you use CSS Modules
import { IProduct } from "@/types"; // Use IProduct type for better type safety

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} passHref>
      <div className={styles.productCard}>
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className={styles.image}
          priority
        />
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}

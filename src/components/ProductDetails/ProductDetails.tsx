import Image from "next/image";
import styles from "./ProductDetails.module.css";
import { IProduct } from "@/types";

interface ProductDetailProps {
  product: IProduct;
}

export default function ProductDetails({ product }: ProductDetailProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.details}>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <div className={styles.rating}>
            <span>
              <strong>Rating:</strong> {product.rating.rate} ⭐
            </span>
            <span>({product.rating.count} reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import styles from "./Loading.module.css";

export default function LoadingProduct() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.imageSkeleton} />
        <div className={styles.textSkeleton} style={{ width: "60%" }} />
        <div className={styles.textSkeleton} style={{ width: "80%" }} />
        <div className={styles.textSkeleton} style={{ width: "40%" }} />
      </div>
    </div>
  );
}

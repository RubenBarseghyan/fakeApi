import styles from "./Error.module.css";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function ProductError({ error, reset }: ErrorProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}> We could not load the product.</h2>
      <p className={styles.message}>
        {error.message || "Something went wrong. Please try again."}
      </p>
      <button className={styles.retryButton} onClick={reset}>
        🔁 Retry
      </button>
    </div>
  );
}

"use client"
import ProductError from "../../../components/Error/Error";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function ProductErr({ error, reset }: ErrorProps) {
  return (
    <div style={{ padding: 40, textAlign: "center", color: "#c00" }}>
      <ProductError error={error} reset={reset} />
    </div>
  );
}

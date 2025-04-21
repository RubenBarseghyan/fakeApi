import { ImageResponse } from "@vercel/og";
import { log } from "console";

export const runtime = "edge";

export default async function handler({ params }: { params: { id: string } }) {
  const res = await fetch(`http://localhost:3000/api/${params.id}`);
  const product = await res.json();
  console.log("axaxaxax")
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "white",
        }}
      >
        <img src={product.image} width={300} height={300} alt={product.title} />
        <h1 style={{ fontSize: 40 }}>{product.title}</h1>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
